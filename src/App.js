import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//import components

//import pages
import Home from "./pages/Home";

function App() {
  return (
    <Router basename="/weather_dashboard">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
