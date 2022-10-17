import axios from "axios";
import { useEffect, useState } from "react";

import Checkbox from "@/components/PopulationPage/Checkbox";

interface Prefecture {
  prefCode: number;
  prefName: string;
}

const PopulationPage = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
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
      {prefectures.map(prefecture => {
        return (
          <div key={prefecture.prefCode}>
            <Checkbox text={prefecture.prefName} />
          </div>
        );
      })}
    </>
  );
};
export default PopulationPage;
