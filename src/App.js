import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "tw-elements";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from "./pages/Home";
import WeatherMap from "./pages/WeatherMap";
import WeatherTabFetch from "./components/WeatherTabFetch";
import Sidetabs from "./components/Sidetabs";
import LiveWeather from "./pages/LiveWeather";
import LiveHeat from "./pages/LiveHeat";
import LiveWind from "./pages/LiveWind";

function App() {
  return (
    <Router basename="/React-Weather">
      <div className="flex flex-row">
        <Sidetabs className="" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Maps" element={<WeatherMap />} />
          <Route exact path="/Maps/LiveWeather" element={<LiveWeather />} />
          <Route exact path="/Maps/LiveHeat" element={<LiveHeat />} />
          <Route exact path="/Maps/LiveWind" element={<LiveWind />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
