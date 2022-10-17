import axios from "axios";
import { useEffect, useState } from "react";

import Checkbox from "@/components/PopulationPage/Checkbox";

import PopulationPageStyle from "../assets/css/PopulationPage.module.css";
import Chart from "../components/PopulationPage/Chart";

interface Prefecture {
  prefCode: number;
  prefName: string;
}

const PopulationPage = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "/api/v1/population/composition/perYear?prefCode=1&cityCode=-",
        {
          headers: {
            "X-API-KEY": "BGYts3U0zrQf5niqALO5C5uVOnun5HjuckAAkx9u",
          },
        }
      );
      console.log(response.data);
    };
    fetchData();
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/v1/prefectures", {
        headers: {
          "X-API-KEY": "BGYts3U0zrQf5niqALO5C5uVOnun5HjuckAAkx9u",
        },
      });
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
      <div className={PopulationPageStyle.chart__wrapper}>
        <Chart />
      </div>
    </>
  );
};
export default PopulationPage;
