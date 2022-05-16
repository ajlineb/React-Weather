import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidetabs from "../components/Sidetabs";
import ApiSearchV2 from "../utils/ApiSearchV2";

//import Current_Weather from "../components/Current_Weather";

class Home extends React.Component {
  state = {
    data: null,
  };

  handleCallback = (childData) => {
    this.setState({ data: childData });
  };
  //brainstorm ideas that this home page should have on it..
  //should firstly ask if the user wants to share their location
  //if so, use the lat long to get current weather for their area and display next seven days

  //not for this page but header tabs
  //should contain a map tab at least kinda want to try it out

  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  // const [data, setData] = useState(false);
  // const [city, setCity] = useState(null);
  // const [index, setIndex] = useState(0);

  // //current Day states
  // const [currentDay, setCurrentDay] = useState("Current Day");
  // const [currentDayWeatherImage, setCurrentDayWeatherImage] =
  //   useState("Animated image");
  // const [currentDayWeather, setCurrentDayWeather] =
  //   useState("Weather that day");
  // const [currentDayAvg, setCurrentDayAvg] = useState("Temp Avg");
  // const [currentDayWind, SetCurrentDayWind] = useState("Wind");
  // const [currentCity, setCurrentCity] = useState("City");

  // //next Day States
  // const [nextDay, setNextDay] = useState("Next Day");
  // const [nextDayWeatherImage, setNextDayWeatherImage] =
  //   useState("Animated Image");
  // const [nextDayWeather, setNextDayWeather] = useState("Expected Weather");
  // const [nextDayAvg, setNextDayAvg] = useState("Temp Avg");

  // //2 future day States
  // const [nnextDay, setNNextDay] = useState("Next Day");
  // const [nnextDayWeatherImage, setNNextDayWeatherImage] =
  //   useState("Animated Image");
  // const [nnextDayWeather, setNNextDayWeather] = useState("Expected Weather");
  // const [nnextDayAvg, setNNextDayAvg] = useState("Temp Avg");

  // //3 future day States
  // const [nnnextDay, setNNNextDay] = useState("Next Day");
  // const [nnnextDayWeatherImage, setNNNextDayWeatherImage] =
  //   useState("Animated Image");
  // const [nnnextDayWeather, setNNNextDayWeather] = useState("Expected Weather");
  // const [nnnextDayAvg, setNNNextDayAvg] = useState("Temp Avg");

  //loops through local storage to get all cities and their info from previous times
  // const getInfo = (value) => {
  //   if (
  //     localStorage.getItem("CityInfo") === null ||
  //     localStorage.getItem("CityInfo") === "[]"
  //   ) {
  //     //console.log("none exist!");
  //     //console.log(localStorage.getItem("CityInfo"));
  //     setData(false);
  //     //reset everything if no data exists in local storage
  //     setCurrentCity("City");
  //     setCurrentDay("Current Day");
  //     setCurrentDayWeather("Current Weather");
  //     setCurrentDayAvg("Current Temp");
  //     SetCurrentDayWind("Wind info");
  //     setNextDay("Next Day");
  //     setNextDayWeather("Next Day Weather");
  //     setNextDayAvg("Next Day Temp");
  //     setNNextDay("Future Day");
  //     setNNextDayWeather("Expected Weather");
  //     setNNextDayAvg("Expected Temp");
  //     setNNNextDay("Future Day");
  //     setNNNextDayWeather("Expected Weather");
  //     setNNNextDayAvg("Expected Temp");
  //     return;
  //   }
  //   let storedCities = JSON.parse(localStorage.getItem("CityInfo"));
  //   //console.log(storedCities);
  //   setCurrentCity(storedCities[value].city.name);
  //   setData(storedCities); //will rerender the page if the value has changed with the useEffect down below
  //   setCurrentDay(storedCities[value].list[0].dt_txt);
  //   setCurrentDayWeather(storedCities[value].list[0].weather[0].description);
  //   setCurrentDayAvg(storedCities[value].list[0].main.temp);
  //   SetCurrentDayWind(storedCities[value].list[0].wind); //should return an object of wind values
  //   //next day states
  //   setNextDay(storedCities[value].list[8].dt_txt);
  //   setNextDayWeather(storedCities[value].list[8].weather[0].description);
  //   setNextDayAvg(storedCities[value].list[8].main.temp);
  //   //next next day
  //   setNNextDay(storedCities[value].list[16].dt_txt);
  //   setNNextDayWeather(storedCities[value].list[16].weather[0].description);
  //   setNNextDayAvg(storedCities[value].list[16].main.temp);
  //   //next next next day
  //   setNNNextDay(storedCities[value].list[24].dt_txt);
  //   setNNNextDayWeather(storedCities[value].list[24].weather[0].description);
  //   setNNNextDayAvg(storedCities[value].list[24].main.temp);
  //   return storedCities;
  // };

  // useEffect(() => {
  //   //setCity(Object.keys(localStorage));
  //   getInfo(0);
  // }, []);

  // const handlePrevious = () => {
  //   let storedCities = JSON.parse(localStorage.getItem("CityInfo"));
  //   if (storedCities === undefined) return;
  //   setIndex(index - 1);
  //   if (index === 0 || index < 0) {
  //     setIndex(storedCities.length - 1);
  //     if (index < 0) {
  //       setCity("");
  //       return;
  //     }
  //   }
  //   //console.log(index);
  //   getInfo(index);
  //   return;
  // };
  // const handleNext = () => {
  //   let storedCities = JSON.parse(localStorage.getItem("CityInfo"));
  //   if (storedCities === undefined) return;
  //   setIndex(index + 1);
  //   if (index > storedCities.length - 2) {
  //     setIndex(0);
  //   }
  //   //console.log(index);
  //   getInfo(index);
  //   return;
  // };

  // const deleteCity = () => {
  //   let values = JSON.parse(localStorage.getItem("CityInfo"));
  //   if (values.length > 0) {
  //     for (let i = 0; i < values.length; i++) {
  //       if (values[i].city.name === currentCity) {
  //         //console.log("deleted!");
  //         values.splice(i, 1);
  //         values = JSON.stringify(values);
  //         localStorage.setItem("CityInfo", values);
  //         break;
  //       }
  //     }
  //   }
  //   handlePrevious();
  //   return;
  // };

  // //changes the degrees to a cardinal direction
  // const checkDirection = (deg) => {
  //   if (deg === undefined) return;
  //   if ((deg >= 0 && deg <= 45) || deg >= 315) {
  //     return "North";
  //   }
  //   if (deg >= 46 && deg <= 135) {
  //     return "East";
  //   }
  //   if (deg >= 136 && deg <= 225) {
  //     return "South";
  //   }
  //   if (deg >= 226 && deg <= 314) {
  //     return "West";
  //   }
  // };

  // //will be used to update the information for the current city
  // const updateInfo = () => {
  //   //console.log(city);
  //   //console.log(JSON.parse(localStorage.getItem("CityInfo")));
  //   if (JSON.parse(localStorage.getItem("CityInfo"))) {
  //     ApiSearchV2.getCityLocation(currentCity);
  //     getInfo(index);
  //     return;
  //   }
  //   return;
  // };
  // <div className="h-screen pb-16 flex flex-row">
  // <div className="flex-1 grid grid-col-2 grid-flow-col gap-4 p-5 bg-slate-300">
  //           <div className="bg-slate-400 rounded-lg flex-1 flex-column">
  //             <div className="text-lg font-bold flex justify-center items-center"></div>
  //             {/* place the current day info here */}
  //             <div className="h-2/3 mt-20 bg-indigo-400 flex-1 flex-column">
  //               <div className="pl-8 pt-2">{currentCity}</div>
  //               <div className="p-8">Todays Date: {currentDay}</div>
  //               <div className="p-8 h-1/3">{currentDayWeatherImage}</div>
  //               <div className="p-8">Current Weather: {currentDayWeather}</div>
  //               <div className="p-8">
  //                 Temp: {Math.floor(currentDayAvg - 273)}°C or{" "}
  //                 {Math.floor(((currentDayAvg - 273) * 9) / 5 + 32)}°F
  //               </div>
  //             </div>
  //             <div className="p-3 flex flex-col justify-center items-center">
  //               <div className="font-bold">City Options</div>
  //               <div>
  //                 <button
  //                   onClick={handlePrevious}
  //                   className="m-2 font-bold px-3 py-2 text-white font-bold rounded-lg bg-indigo-700 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-700 shrink h-10"
  //                 >
  //                   Previous
  //                 </button>
  //                 <button
  //                   onClick={handleNext}
  //                   className="m-2 font-bold px-3 py-2 text-white font-bold rounded-lg bg-indigo-700 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-700 shrink h-10"
  //                 >
  //                   Next
  //                 </button>
  //                 <button
  //                   onClick={updateInfo}
  //                   className="m-2 font-bold px-3 py-2 text-white font-bold rounded-lg bg-green-500 hover:bg-emerald-500 active:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-400 shrink h-10"
  //                 >
  //                   Update City
  //                 </button>
  //                 <button
  //                   onClick={deleteCity}
  //                   className="m-2 font-bold px-3 py-2 text-white font-bold rounded-lg bg-rose-700 hover:bg-pink-700 active:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-400 shrink h-10"
  //                 >
  //                   Delete Current City
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="bg-slate-400 rounded-lg flex-1 flex-column">
  //             <div className="grid grid-col-3 grid-flow-col gap-3 mt-20 h-1/3 pb-2">
  //               <div className="pl-2 bg-violet-900">
  //                 <div className="p-3">{nextDay}</div>
  //                 <div className="p-3 h-1/3">{nextDayWeatherImage}</div>
  //                 <div className="p-3">{nextDayWeather}</div>
  //                 <div className="p-3">
  //                   Temp: {Math.floor(nextDayAvg - 273)}°C or{" "}
  //                   {Math.floor(((nextDayAvg - 273) * 9) / 5 + 32)}°F
  //                 </div>
  //               </div>
  //               <div className="bg-violet-700">
  //                 <div className="p-3">{nnextDay}</div>
  //                 <div className="p-3 h-1/3">{nnextDayWeatherImage}</div>
  //                 <div className="p-3">{nnextDayWeather}</div>
  //                 <div className="p-3">
  //                   Temp: {Math.floor(nnextDayAvg - 273)}°C or{" "}
  //                   {Math.floor(((nnextDayAvg - 273) * 9) / 5 + 32)}°F
  //                 </div>
  //               </div>
  //               <div className="pr-2 bg-violet-500">
  //                 <div className="p-3">{nnnextDay}</div>
  //                 <div className="p-3 h-1/3">{nnnextDayWeatherImage}</div>
  //                 <div className="p-3">{nnnextDayWeather}</div>
  //                 <div className="p-3">
  //                   Temp: {Math.floor(nnnextDayAvg - 273)}°C or{" "}
  //                   {Math.floor(((nnnextDayAvg - 273) * 9) / 5 + 32)}°F
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="h-1/3 bg-indigo-700">
  //               <div className="p-3 h-1/4">Alt info for the current day</div>
  //               <div className="p-3">
  //                 Wind speed: {currentDayWind.speed} mph, Direction:{" "}
  //                 {checkDirection(currentDayWind.deg)}ward, Gust:{" "}
  //                 {currentDayWind.gust} mph
  //               </div>
  //               <div className="p-3">Index info</div>
  //               <div className="p-3">
  //                 Extra info about the day maybe holiday?
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  render() {
    const { data } = this.state;
    return (
      <>
        <Header paraentCallback={this.handleCallback} />
        <h1>{data}</h1>
      </>
    );
  }
}

export default Home;
