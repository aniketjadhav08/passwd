import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HomeScreen from "./dashboards/home-screen";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-225875005-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="home-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/passwd" element={<HomeScreen />} />
          <Route path="*" element={<Navigate to="/passwd" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
