export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type fetchData = {
  data: populationDataPerYear<string>[];
  label: string;
};

export type populationDataPerYear<K extends string> = {
  [key in K]: string | number;
};

export type checkList = {
  [key: string]: boolean;
};
