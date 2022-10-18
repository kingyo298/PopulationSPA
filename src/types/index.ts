export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type fetchData = {
  data: populationDataPerYear[];
  label: string;
};

export type populationDataPerYear = {
  year: number;
  value: number;
  rate?: number;
};
