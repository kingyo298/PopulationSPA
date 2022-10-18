import { useEffect, useState } from "react";

import Checkbox from "@/components/PopulationPage/Checkbox";

import { API } from "../api";
import PopulationPageStyle from "../assets/css/PopulationPage.module.css";
import Chart from "../components/PopulationPage/Chart";

interface Prefecture {
  prefCode: number;
  prefName: string;
}

type fetchData = {
  data: populationDataPerYear[];
  label: string;
};
type populationDataPerYear = {
  year: number;
  value: number;
  rate?: number;
};

const PopulationPage = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [populationData, setPopulationData] = useState<fetchData[]>([]);
  useEffect(() => {
    const fetchPopulationData = async (code: number) => {
      const response = await API.population(code);
      setPopulationData(response.data.result.data);
    };
    const fetchPrefectures = async () => {
      const response = await API.prefectures();
      setPrefectures(response.data.result);
    };
    fetchPrefectures();
    fetchPopulationData(1);
  }, []);
  return (
    <>
      <div className={PopulationPageStyle.checkboxes__wrapper}>
        {prefectures.map(prefecture => {
          return (
            <div key={prefecture.prefCode}>
              <Checkbox text={prefecture.prefName} />
            </div>
          );
        })}
      </div>
      <h1>都道府県別総人口の推移</h1>
      <div className={PopulationPageStyle.chart__wrapper}>
        <Chart populationData={populationData} />
      </div>
    </>
  );
};
export default PopulationPage;
