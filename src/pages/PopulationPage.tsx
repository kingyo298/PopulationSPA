import axios from "axios";
import { useEffect, useState } from "react";

import Checkbox from "@/components/PopulationPage/Checkbox";

import { API } from "../api";
import PopulationPageStyle from "../assets/css/PopulationPage.module.css";
import Chart from "../components/PopulationPage/Chart";

interface Prefecture {
  prefCode: number;
  prefName: string;
}

const PopulationPage = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  useEffect(() => {
    const fetchData = async (code: number) => {
      const response = await API.population(code);
      console.log(response.data.result);
    };
    fetchData(1);
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await API.prefectures();
      setPrefectures(response.data.result);
    };
    fetchData();
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
        <Chart />
      </div>
    </>
  );
};
export default PopulationPage;
