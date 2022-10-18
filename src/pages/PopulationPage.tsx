import { useCallback, useEffect, useState } from "react";

import { API } from "@/api";
import PopulationPageStyle from "@/assets/css/PopulationPage.module.css";
import Chart from "@/components/PopulationPage/Chart";
import Checkbox from "@/components/PopulationPage/Checkbox";
import { populationDataPerYear, Prefecture } from "@/types";
import { addFetchData } from "@/utils/makeGraphData";

const PopulationPage = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const selectedPopulationDataArray: populationDataPerYear<string>[][] = [];

  useEffect(() => {
    const fetchPrefectures = async () => {
      const response = await API.prefectures();
      setPrefectures(response.data.result);
    };
    fetchPrefectures();
  }, []);

  const addPopulationData = useCallback(
    (code: number) => {
      const result: populationDataPerYear<string>[] = [];
      const fetchData = async (code: number) => {
        const response = await API.population(code);
        console.log(response.data.result.data);
        const graphData = addFetchData(
          response.data.result.data,
          prefectures[code].prefName,
          result
        );
        selectedPopulationDataArray.push(graphData);
      };
      fetchData(code);
    },
    [selectedPopulationDataArray, prefectures]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      // 指定した都道府県のPopulationDataを配列から削除
    } else {
      // 指定した都道府県のPopulationDataを配列に追加
      addPopulationData(parseInt(e.target.value));
    }
  };

  return (
    <>
      <div className={PopulationPageStyle.checkboxes__wrapper}>
        {prefectures.map((prefecture, index) => {
          return (
            <div key={prefecture.prefCode}>
              <Checkbox
                id={`id_${index}`}
                text={prefecture.prefName}
                value={prefecture.prefCode}
                checked={true}
                onChange={handleChange}
              />
            </div>
          );
        })}
      </div>
      <h1>都道府県別総人口の推移</h1>
      <div className={PopulationPageStyle.chart__wrapper}>
        <Chart populationData={selectedPopulationDataArray} />
      </div>
    </>
  );
};
export default PopulationPage;
