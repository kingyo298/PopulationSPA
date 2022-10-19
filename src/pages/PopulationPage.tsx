import { useEffect, useState } from "react";

import { API } from "@/api";
import CheckboxStyle from "@/assets/css/components/Checkbox.module.css";
import PopulationPageStyle from "@/assets/css/PopulationPage.module.css";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Button from "@/components/HomePage/Button";
import Chart from "@/components/PopulationPage/Chart/Chart";
import Checkbox from "@/components/PopulationPage/Checkbox";
import { populationDataPerYear, Prefecture } from "@/types";
import { initCheckedList } from "@/utils/initCheckedList";
import { addFetchData, removeFetchData } from "@/utils/makeGraphData";

const PopulationPage = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [populationData, setPopulationData] = useState<
    populationDataPerYear<string>[]
  >([]);
  const [checkedList, setCheckedList] = useState(initCheckedList());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchPrefectures = async () => {
      const response = await API.prefectures();
      setPrefectures(response.data.result);
    };
    fetchPrefectures();
  }, []);
  const handleClick = () => {
    setOpen(!open);
  };
  const GuideOfCheckBox = (
    <div>
      <Button
        text={open ? "閉じる" : "都道府県を選択しましょう!"}
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );

  const addPopulationData = (code: number, prefectures: Prefecture[]) => {
    const fetchData = async (code: number) => {
      const response = await API.population(code);
      const designatedPrefecture = prefectures.find(
        prefecture => prefecture.prefCode === code
      );
      if (designatedPrefecture === undefined) {
        throw Error("Invalid prefCode!");
      }
      const graphData = addFetchData(
        response.data.result.data,
        designatedPrefecture.prefName,
        populationData
      );
      setPopulationData(graphData);
    };
    fetchData(code);
  };

  const removePopulationData = (code: number, prefectures: Prefecture[]) => {
    const designatedPrefecture = prefectures.find(
      prefecture => prefecture.prefCode === code
    );
    if (designatedPrefecture === undefined) {
      throw Error("Invalid prefCode!");
    }
    const updatedArray = removeFetchData(
      populationData,
      designatedPrefecture.prefName
    );
    setPopulationData(updatedArray);
  };

  const resetPopulationData = () => {
    setPopulationData([]);
    setCheckedList(initCheckedList());
  };

  const ResetButton = (
    <div className={PopulationPageStyle.resetButton}>
      <button onClick={resetPopulationData}>リセットする</button>
    </div>
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedList({
      ...checkedList,
      [e.target.id]: e.target.checked,
    });
    if (!e.target.checked) {
      // 指定した都道府県のPopulationDataを配列から削除
      removePopulationData(parseInt(e.target.value), prefectures);
    } else {
      // 指定した都道府県のPopulationDataを配列に追加
      addPopulationData(parseInt(e.target.value), prefectures);
    }
  };

  return (
    <>
      <Header />
      <section className={PopulationPageStyle.container}>
        <div className={PopulationPageStyle.checkboxes__section__inner}>
          <div className={PopulationPageStyle.guideButton}>
            {GuideOfCheckBox}
            {open && ResetButton}
          </div>
          <div className={PopulationPageStyle.checkboxes__wrapper}>
            {open &&
              prefectures.map(prefecture => {
                return (
                  <Checkbox
                    key={prefecture.prefCode}
                    id={`${prefecture.prefCode}`}
                    text={prefecture.prefName}
                    value={prefecture.prefCode}
                    checked={checkedList[prefecture.prefCode]}
                    onChange={handleChange}
                  />
                );
              })}
            <div className={CheckboxStyle.checkbox}></div>
          </div>
        </div>
        <div className={PopulationPageStyle.title__wrapper}>
          <h1>都道府県別総人口の推移</h1>
        </div>
        <div className={PopulationPageStyle.chart__wrapper}>
          {populationData.length !== 0 && (
            <Chart populationData={populationData} prefectures={prefectures} />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default PopulationPage;
