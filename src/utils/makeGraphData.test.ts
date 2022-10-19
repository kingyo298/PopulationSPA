import { populationDataPerYear } from "@/types";

import { addFetchData, removeFetchData } from "./makeGraphData";

const sagaData = [
  {
    data: [
      { year: 1960, value: 1760421 },
      { year: 1965, value: 1641245 },
      { year: 1970, value: 1570245 },
      { year: 1975, value: 1571912 },
      { year: 1980, value: 1590564 },
      { year: 1985, value: 1593968 },
      { year: 1990, value: 1562959 },
      { year: 1995, value: 1544934 },
      { year: 2000, value: 1516523 },
      { year: 2005, value: 1478632 },
      { year: 2010, value: 1426779 },
      { year: 2015, value: 1377187 },
      { year: 2020, value: 1320596 },
      { year: 2025, value: 1257939 },
      { year: 2030, value: 1192223 },
      { year: 2035, value: 1124291 },
      { year: 2040, value: 1053851 },
      { year: 2045, value: 982200 },
    ],
    label: "総人口",
  },
  {
    data: [
      { year: 1960, value: 638850, rate: 36.2 },
      { year: 1965, value: 527123, rate: 32.1 },
      { year: 1970, value: 439298, rate: 27.9 },
      { year: 1975, value: 403824, rate: 25.6 },
      { year: 1980, value: 385200, rate: 24.2 },
      { year: 1985, value: 361823, rate: 22.6 },
      { year: 1990, value: 316761, rate: 20.2 },
      { year: 1995, value: 277263, rate: 17.9 },
      { year: 2000, value: 243046, rate: 16 },
      { year: 2005, value: 215987, rate: 14.6 },
      { year: 2010, value: 193428, rate: 13.5 },
      { year: 2015, value: 177562, rate: 12.8 },
      { year: 2020, value: 165646, rate: 12.5 },
      { year: 2025, value: 152059, rate: 12 },
      { year: 2030, value: 138547, rate: 11.6 },
      { year: 2035, value: 126629, rate: 11.2 },
      { year: 2040, value: 117196, rate: 11.1 },
      { year: 2045, value: 107831, rate: 10.9 },
    ],
    label: "年少人口",
  },
  {
    data: [
      { year: 1960, value: 1019529, rate: 57.9 },
      { year: 1965, value: 999303, rate: 60.8 },
      { year: 1970, value: 1002416, rate: 63.8 },
      { year: 1975, value: 1019301, rate: 64.8 },
      { year: 1980, value: 1035278, rate: 65 },
      { year: 1985, value: 1038396, rate: 65.1 },
      { year: 1990, value: 1016338, rate: 65 },
      { year: 1995, value: 993783, rate: 64.3 },
      { year: 2000, value: 956692, rate: 63 },
      { year: 2005, value: 913224, rate: 61.7 },
      { year: 2010, value: 857416, rate: 60 },
      { year: 2015, value: 784862, rate: 56.9 },
      { year: 2020, value: 718983, rate: 54.4 },
      { year: 2025, value: 663485, rate: 52.7 },
      { year: 2030, value: 617161, rate: 51.7 },
      { year: 2035, value: 572299, rate: 50.9 },
      { year: 2040, value: 519310, rate: 49.2 },
      { year: 2045, value: 475497, rate: 48.4 },
    ],
    label: "生産年齢人口",
  },
  {
    data: [
      { year: 1960, value: 102042, rate: 5.7 },
      { year: 1965, value: 114819, rate: 6.9 },
      { year: 1970, value: 128531, rate: 8.1 },
      { year: 1975, value: 148708, rate: 9.4 },
      { year: 1980, value: 169753, rate: 10.6 },
      { year: 1985, value: 193605, rate: 12.1 },
      { year: 1990, value: 228991, rate: 14.6 },
      { year: 1995, value: 273335, rate: 17.6 },
      { year: 2000, value: 315871, rate: 20.8 },
      { year: 2005, value: 348820, rate: 23.5 },
      { year: 2010, value: 369290, rate: 25.8 },
      { year: 2015, value: 404686, rate: 29.3 },
      { year: 2020, value: 435967, rate: 33 },
      { year: 2025, value: 442395, rate: 35.1 },
      { year: 2030, value: 436515, rate: 36.6 },
      { year: 2035, value: 425363, rate: 37.8 },
      { year: 2040, value: 417345, rate: 39.6 },
      { year: 2045, value: 398872, rate: 40.6 },
    ],
    label: "老年人口",
  },
];
const tokyoData = [
  {
    data: [
      { year: 1960, value: 3443176 },
      { year: 1965, value: 4430743 },
      { year: 1970, value: 5472247 },
      { year: 1975, value: 6397748 },
      { year: 1980, value: 6924348 },
      { year: 1985, value: 7431974 },
      { year: 1990, value: 7980391 },
      { year: 1995, value: 8245900 },
      { year: 2000, value: 8489974 },
      { year: 2005, value: 8791597 },
      { year: 2010, value: 9048331 },
      { year: 2015, value: 9126214 },
      { year: 2020, value: 9141394 },
      { year: 2025, value: 9069562 },
      { year: 2030, value: 8933474 },
      { year: 2035, value: 8750958 },
      { year: 2040, value: 8541016 },
      { year: 2045, value: 8312524 },
    ],
    label: "総人口",
  },
  {
    data: [
      { year: 1960, value: 940719, rate: 27.3 },
      { year: 1965, value: 1035303, rate: 23.3 },
      { year: 1970, value: 1301772, rate: 23.7 },
      { year: 1975, value: 1632021, rate: 25.5 },
      { year: 1980, value: 1703063, rate: 24.5 },
      { year: 1985, value: 1595127, rate: 21.4 },
      { year: 1990, value: 1375769, rate: 17.2 },
      { year: 1995, value: 1231943, rate: 14.9 },
      { year: 2000, value: 1184231, rate: 13.9 },
      { year: 2005, value: 1184631, rate: 13.4 },
      { year: 2010, value: 1187743, rate: 13.1 },
      { year: 2015, value: 1140748, rate: 12.4 },
      { year: 2020, value: 1092342, rate: 11.9 },
      { year: 2025, value: 1028000, rate: 11.3 },
      { year: 2030, value: 977324, rate: 10.9 },
      { year: 2035, value: 937488, rate: 10.7 },
      { year: 2040, value: 916593, rate: 10.7 },
      { year: 2045, value: 891282, rate: 10.7 },
    ],
    label: "年少人口",
  },
  {
    data: [
      { year: 1960, value: 2351581, rate: 68.2 },
      { year: 1965, value: 3201686, rate: 72.2 },
      { year: 1970, value: 3914556, rate: 71.5 },
      { year: 1975, value: 4424772, rate: 69.1 },
      { year: 1980, value: 4772542, rate: 68.9 },
      { year: 1985, value: 5277568, rate: 71 },
      { year: 1990, value: 5874445, rate: 73.6 },
      { year: 1995, value: 6098448, rate: 73.9 },
      { year: 2000, value: 6121470, rate: 72.1 },
      { year: 2005, value: 6088141, rate: 69.2 },
      { year: 2010, value: 5988857, rate: 66.1 },
      { year: 2015, value: 5744383, rate: 62.9 },
      { year: 2020, value: 5692899, rate: 62.2 },
      { year: 2025, value: 5617607, rate: 61.9 },
      { year: 2030, value: 5429825, rate: 60.7 },
      { year: 2035, value: 5129468, rate: 58.6 },
      { year: 2040, value: 4756673, rate: 55.6 },
      { year: 2045, value: 4498417, rate: 54.1 },
    ],
    label: "生産年齢人口",
  },
  {
    data: [
      { year: 1960, value: 150876, rate: 4.3 },
      { year: 1965, value: 193754, rate: 4.3 },
      { year: 1970, value: 255919, rate: 4.6 },
      { year: 1975, value: 337305, rate: 5.2 },
      { year: 1980, value: 443048, rate: 6.3 },
      { year: 1985, value: 555885, rate: 7.4 },
      { year: 1990, value: 704596, rate: 8.8 },
      { year: 1995, value: 908467, rate: 11 },
      { year: 2000, value: 1169528, rate: 13.7 },
      { year: 2005, value: 1480262, rate: 16.8 },
      { year: 2010, value: 1819503, rate: 20.1 },
      { year: 2015, value: 2158157, rate: 23.6 },
      { year: 2020, value: 2356153, rate: 25.7 },
      { year: 2025, value: 2423955, rate: 26.7 },
      { year: 2030, value: 2526325, rate: 28.2 },
      { year: 2035, value: 2684002, rate: 30.6 },
      { year: 2040, value: 2867750, rate: 33.5 },
      { year: 2045, value: 2922825, rate: 35.1 },
    ],
    label: "老年人口",
  },
];
const sagaDataInGraph = [
  { year: "1960年", 佐賀県: 1760421 },
  { year: "1965年", 佐賀県: 1641245 },
  { year: "1970年", 佐賀県: 1570245 },
  { year: "1975年", 佐賀県: 1571912 },
  { year: "1980年", 佐賀県: 1590564 },
  { year: "1985年", 佐賀県: 1593968 },
  { year: "1990年", 佐賀県: 1562959 },
  { year: "1995年", 佐賀県: 1544934 },
  { year: "2000年", 佐賀県: 1516523 },
  { year: "2005年", 佐賀県: 1478632 },
  { year: "2010年", 佐賀県: 1426779 },
  { year: "2015年", 佐賀県: 1377187 },
  { year: "2020年", 佐賀県: 1320596 },
  { year: "2025年", 佐賀県: 1257939 },
  { year: "2030年", 佐賀県: 1192223 },
  { year: "2035年", 佐賀県: 1124291 },
  { year: "2040年", 佐賀県: 1053851 },
  { year: "2045年", 佐賀県: 982200 },
];
const sagaAndTokyoInGraph = [
  { year: "1960年", 佐賀県: 1760421, 東京都: 3443176 },
  { year: "1965年", 佐賀県: 1641245, 東京都: 4430743 },
  { year: "1970年", 佐賀県: 1570245, 東京都: 5472247 },
  { year: "1975年", 佐賀県: 1571912, 東京都: 6397748 },
  { year: "1980年", 佐賀県: 1590564, 東京都: 6924348 },
  { year: "1985年", 佐賀県: 1593968, 東京都: 7431974 },
  { year: "1990年", 佐賀県: 1562959, 東京都: 7980391 },
  { year: "1995年", 佐賀県: 1544934, 東京都: 8245900 },
  { year: "2000年", 佐賀県: 1516523, 東京都: 8489974 },
  { year: "2005年", 佐賀県: 1478632, 東京都: 8791597 },
  { year: "2010年", 佐賀県: 1426779, 東京都: 9048331 },
  { year: "2015年", 佐賀県: 1377187, 東京都: 9126214 },
  { year: "2020年", 佐賀県: 1320596, 東京都: 9141394 },
  { year: "2025年", 佐賀県: 1257939, 東京都: 9069562 },
  { year: "2030年", 佐賀県: 1192223, 東京都: 8933474 },
  { year: "2035年", 佐賀県: 1124291, 東京都: 8750958 },
  { year: "2040年", 佐賀県: 1053851, 東京都: 8541016 },
  { year: "2045年", 佐賀県: 982200, 東京都: 8312524 },
];
test("fetchしたデータをRechartsに投入するデータの形に成形するユニットテスト", () => {
  const result: populationDataPerYear<string>[] = [];
  expect(addFetchData(sagaData, "佐賀県", result)).toEqual(sagaDataInGraph);
});

test("追加でfetchしたデータをグラフで描画するために成形する", () => {
  const result: populationDataPerYear<string>[] = [];
  const saga = addFetchData(sagaData, "佐賀県", result);
  expect(addFetchData(tokyoData, "東京都", saga)).toEqual(sagaAndTokyoInGraph);
});

test("指定した都道府県のデータを削除する", () => {
  expect(removeFetchData(sagaAndTokyoInGraph, "東京都")).toEqual(
    sagaDataInGraph
  );
});