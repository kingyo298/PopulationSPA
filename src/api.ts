import axios from "axios";

const api = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp/api/v1",
  headers: {
    "X-API-KEY": "BGYts3U0zrQf5niqALO5C5uVOnun5HjuckAAkx9u",
  },
});

export const API = {
  prefectures: () => api.get("/prefectures"),
  population: (code: number) =>
    api.get(`/population/composition/perYear?cityCode=-&prefCode=${code + 1}`),
};
