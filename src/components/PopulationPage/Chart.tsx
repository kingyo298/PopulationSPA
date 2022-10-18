import "../../assets/css/components/Rechart.css";

import { useCallback } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import makeGraphDataFromFetchData from "../../utils/makeGraphData";

type fetchData = {
  data: populationDataPerYear[];
  label: string;
};

type populationDataPerYear = {
  year: number;
  value: number;
  rate?: number;
};

interface chartProps {
  populationData: fetchData[];
}
const PopulationChart = (props: chartProps) => {
  const makeGraphData = useCallback((data: fetchData[]) => {
    return makeGraphDataFromFetchData(data);
  }, []);

  const graphData = makeGraphData(props.populationData);

  return (
    <ResponsiveContainer>
      <LineChart
        data={graphData}
        margin={{ top: 5, right: 60, left: 30, bottom: 90 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="year"
          interval={0}
          angle={45}
          dx={20}
          dy={20}
          label={{
            value: "調査年度（年）",
            angle: 0,
            position: "inside",
            dy: 60,
          }}
        />
        <YAxis
          label={{
            value: "人口(人)",
            angle: 0,
            position: "inside",
            dy: -20,
            dx: -30,
          }}
        />
        <Tooltip />
        <Legend verticalAlign="bottom" />
        <Line
          type="monotone"
          dataKey="北海道"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default PopulationChart;
