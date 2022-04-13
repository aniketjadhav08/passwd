import "./App.css";

import HomeScreen from "./dashboards/home-screen";
import ReactGA from 'react-ga';
  const TRACKING_ID = "UA-225875005-1"; 
  ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="home-screen">
      <HomeScreen />
    </div>
  );
}

export default App;
