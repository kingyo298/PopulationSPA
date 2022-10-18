import { fetchData } from "@/types";

const makeGraphDataFromFetchData = (fetchData: fetchData[]) => {
  const result = [];
  if (fetchData.length !== 0) {
    const populationData = fetchData[0].data;
    for (let i = 0; i < populationData.length; i++) {
      const populationGraphDataPerYear = {
        year: populationData[i].year + "年",
        北海道: populationData[i].value,
      };
      result.push(populationGraphDataPerYear);
    }
  }
  return result;
};

export default makeGraphDataFromFetchData;
