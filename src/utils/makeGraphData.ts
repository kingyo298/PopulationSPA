import { fetchData, populationDataPerYear } from "@/types";

export const addFetchData = (
  fetchData: fetchData[],
  prefecture: string,
  array: populationDataPerYear<string>[]
) => {
  if (fetchData.length !== 0) {
    const populationData = fetchData[0].data;
    if (array.length === 0) {
      for (let i = 0; i < populationData.length; i++) {
        const populationGraphDataPerYear = {
          year: populationData[i].year + "年",
          [prefecture]: populationData[i].value,
        };
        array.push(populationGraphDataPerYear);
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        item[prefecture] = populationData[i].value;
      }
    }
  }
  return array;
};

export const removeFetchData = (
  array: populationDataPerYear<string>[],
  prefecture: string
) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    delete array[i][prefecture];
    console.log(array[i]);
  }
  return array;
};
