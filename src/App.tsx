import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PopulationPage from "./pages/PopulationPage";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/populations" element={<PopulationPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
