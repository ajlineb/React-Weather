import React, { useState, useEffect } from "react";
import data from "../utils/imageBase";

export default function Current_Weather() {
  const [key, setKey] = useState(null);
  const [value, setValue] = useState(null);
  const [storage, setStorage] = useState(null);

  const handleInfo = () => {};
  //will use this to rerender weather info on the page as the local storage has changed
  useEffect(() => {}, []);
  return (
    <div className="h-2/3 mt-20 bg-indigo-400 flex-1 flex-column">
      <div className="p-8">Todays Date: {currentDay}</div>
      <div className="p-8 h-1/3">{currentDayWeatherImage}</div>
      <div className="p-8">Current Weather: {currentDayWeather}</div>
      <div className="p-8">
        Temp: {Math.floor(currentDayAvg - 273)}°C or{" "}
        {Math.floor(((currentDayAvg - 273) * 9) / 5 + 32)}°F
      </div>
    </div>
  );
}
