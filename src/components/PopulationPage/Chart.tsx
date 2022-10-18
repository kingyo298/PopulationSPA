import "@/assets/css/components/Rechart.css";

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

import { populationDataPerYear, Prefecture } from "@/types";

interface chartProps {
  populationData: populationDataPerYear<string>[];
  prefectures: Prefecture[];
}
const PopulationChart = (props: chartProps) => {
  return (
    <ResponsiveContainer>
      <LineChart
        data={props.populationData}
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
        {props.prefectures.map((pre: Prefecture) => {
          return (
            <Line
              key={pre.prefCode}
              type="monotone"
              dataKey={pre.prefName}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};
export default PopulationChart;
