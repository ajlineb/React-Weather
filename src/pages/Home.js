import React, { useEffect, useState } from "react";
import Sidetabs from "../components/Sidetabs";
import Weather from "../components/Weather";

export default function Home() {
  //brainstorm ideas that this home page should have on it..
  //should firstly ask if the user wants to share their location
  //if so, use the lat long to get current weather for their area and display next seven days

  //not for this page but header tabs
  //should contain a map tab at least kinda want to try it out

  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts
  const [data, setData] = useState(false);

  //current Day states
  const [currentDay, setCurrentDay] = useState("Current Day");
  const [currentDayWeatherImage, setCurrentDayWeatherImage] =
    useState("Animated image");
  const [currentDayWeather, setCurrentDayWeather] =
    useState("Weather that day");
  const [currentDayAvg, setCurrentDayAvg] = useState("Temp Avg");

  //next Day States
  const [nextDay, setNextDay] = useState("Next Day");
  const [nextDayWeatherImage, setNextDayWeatherImage] =
    useState("Animated Image");
  const [nextDayWeather, setNextDayWeatehr] = useState("Expected Weather");
  const [nextDayAvg, setNextDayAvg] = useState("Temp Avg");

  //2 future day States
  const [nnextDay, setNNextDay] = useState("Next Day");
  const [nnextDayWeatherImage, setNNextDayWeatherImage] =
    useState("Animated Image");
  const [nnextDayWeather, setNNextDayWeatehr] = useState("Expected Weather");
  const [nnextDayAvg, setNNextDayAvg] = useState("Temp Avg");

  //3 future day States
  const [nnnextDay, setNNNextDay] = useState("Next Day");
  const [nnnextDayWeatherImage, setNNNextDayWeatherImage] =
    useState("Animated Image");
  const [nnnextDayWeather, setNNNextDayWeatehr] = useState("Expected Weather");
  const [nnnextDayAvg, setNNNextDayAvg] = useState("Temp Avg");

  //loops through local storage to get all cities and their info from previous times
  const getInfo = () => {
    const key = [];
    if (localStorage.length < 1) {
      setData(false);
      return;
    }
    for (let i = 0; i < localStorage.length; i++) {
      key.push(localStorage.key(i));
    }
    let value = [];
    key.map((k) => {
      return value.push(JSON.parse(localStorage.getItem(k)));
    });
    setData(value); //will rerender the page if the value has changed with the useEffect down below
    setCurrentDay(value[0].list[0].dt_txt);
    setCurrentDayWeather(value[0].list[0].weather[0].description);
    setCurrentDayAvg(value[0].list[0].main.temp);
    return value;
  };

  //to get the information from the local storage on load
  //a useEffect will trigger once if the brackets have no update parameters! great for on load
  useEffect(() => {
    console.log("1st effect");
    getInfo();
  }, []);

  useEffect(() => {
    console.log("2nd effect");
    getInfo();
  }, []);

  const handlePrevious = () => {
    // setData(true);
  };
  const handleNext = () => {
    // setData(true);
  };
  return (
    <div className="h-screen pb-16 flex flex-row">
      <Sidetabs />
      <div className="flex-1 grid grid-col-2 grid-flow-col gap-4 p-5 bg-slate-300">
        <div className="bg-slate-400 rounded-lg flex-1 flex-column">
          <div className="h-2/3 mt-20 bg-indigo-400 flex-1 flex-column">
            <div className="p-8">Todays Date: {currentDay}</div>
            <div className="p-8 h-1/3">{currentDayWeatherImage}</div>
            <div className="p-8">Current Weather: {currentDayWeather}</div>
            <div className="p-8">
              Temp: {Math.floor(currentDayAvg - 273)}°C or{" "}
              {Math.floor(((currentDayAvg - 273) * 9) / 5 + 32)}°F
            </div>
          </div>
          <div className="p-3 flex flex-col justify-center items-center">
            <div className="font-bold">Change Through Cities</div>
            <div>
              <button
                onClick={handlePrevious}
                className="m-2 font-bold px-3 py-2 text-white font-bold rounded-lg bg-indigo-700 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-700 shrink h-10"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="m-2 font-bold px-3 py-2 text-white font-bold rounded-lg bg-indigo-700 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-700 shrink h-10"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="bg-slate-400 rounded-lg flex-1 flex-column">
          <div className="grid grid-col-3 grid-flow-col gap-3 mt-20 h-1/3 pb-2">
            <div className="pl-2 bg-violet-900">
              <div className="p-3">{nextDay}</div>
              <div className="p-3 h-1/3">{nextDayWeatherImage}</div>
              <div className="p-3">{nextDayWeather}</div>
              <div className="p-3">{nextDayAvg}</div>
            </div>
            <div className="bg-violet-700">
              <div className="p-3">{nnextDay}</div>
              <div className="p-3 h-1/3">{nnextDayWeatherImage}</div>
              <div className="p-3">{nnextDayWeather}</div>
              <div className="p-3">{nnextDayAvg}</div>
            </div>
            <div className="pr-2 bg-violet-500">
              <div className="p-3">{nnnextDay}</div>
              <div className="p-3 h-1/3">{nnnextDayWeatherImage}</div>
              <div className="p-3">{nnnextDayWeather}</div>
              <div className="p-3">{nnnextDayAvg}</div>
            </div>
          </div>
          <div className="h-1/3 bg-indigo-700">
            <div className="p-3 h-1/4">Alt info for the current day</div>
            <div className="p-3">Wind info</div>
            <div className="p-3">Index info</div>
            <div className="p-3">Extra info about the day maybe holiday?</div>
          </div>
        </div>
      </div>
    </div>
  );
}
