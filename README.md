# Population SPA
RESAS API（https://opendata.resas-portal.go.jp/）　から、都道府県の一覧と、各都道府県の総人口の推移データを取得し、グラフで見ることができるアプリケーション

## What's inside?
- TopページのStart!ボタンを押すと、メインページにすすむ
- 「都道府県を選択する」ボタンを押すと、チェックボックス一覧とリセットボタンが表示される
- 都道府県のチェックボックスにチェックをつけると、該当する総人口推移データがグラフに描画される
- チェックは複数つけることもできる
- 各点をホバーすると、ある年に指定した都道府県の総人口を多い順に一覧で表示できる。便宜上上位5つまで表示している
- リセットボタンを押すと、チェックボックスのチェックが全て外され、グラフもリセットされる

## 使用したライブラリ

- React.js(Class Components, Hooks): https://reactjs.org/
- Axios(Promise based HTTP client for the browser and node.js): https://github.com/axios/axios
- Recharts(Interactive charts in their web pages): https://recharts.org/en-US/


## 製作者
Hiroya

## アプリケーションのURL

- https://populationspa.vercel.app/
