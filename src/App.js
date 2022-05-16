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

function App() {
  return (
    <Router basename="/weather_dashboard">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Maps" element={<WeatherMap />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
