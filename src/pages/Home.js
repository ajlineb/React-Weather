import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidetabs from "../components/Sidetabs";

//import Current_Weather from "../components/Current_Weather";

export default function Home() {
  const [searchResults, setSearchResults] = useState(null);

  //converts the unix time to a readable format
  const convertTime = (unix) => {
    const milliseconds = unix * 1000;
    const dateObject = new Date(milliseconds);
    const dateFriendly = dateObject.toLocaleString();
    return dateFriendly;
  };

  //changes the degrees to a cardinal direction
  const checkDirection = (deg) => {
    if (deg === undefined) return;
    if ((deg >= 0 && deg <= 45) || deg >= 315) {
      return "North";
    }
    if (deg >= 46 && deg <= 135) {
      return "East";
    }
    if (deg >= 136 && deg <= 225) {
      return "South";
    }
    if (deg >= 226 && deg <= 314) {
      return "West";
    }
  };

  //Changes the text color based on the UV index rating
  const uvColor = (uv) => {
    if (uv >= 10) {
      return "bg-fuchsia-600 font-bold text-slate-100 rounded p-1";
    }
    if (uv >= 8) {
      return "bg-red-700 font-bold text-slate-100 rounded p-1";
    }
    if (uv >= 3) {
      return "bg-amber-500 font-bold text-slate-100 rounded p-1";
    }
    if (uv >= 1) {
      return "bg-green-500 font-bold text-slate-100 rounded p-1";
    } else {
      return "bg-blue-500 font-bold text-slate-100 rounded p-1";
    }
  };

  console.log(JSON.stringify(searchResults));
  return (
    <>
      <Header setSearchResults={setSearchResults} />

      {!searchResults || searchResults === undefined ? (
        <div>
          <h3>
            <b>No Data Found</b>
          </h3>
        </div>
      ) : (
        searchResults.daily.map((result, id) => {
          //this is where the goods is going!!!
          return (
            <div
              key={id}
              className="flex-1 grid grid-col-2 grid-flow-col gap-4 p-5 bg-slate-300"
            >
              <div className="bg-slate-400 rounded-lg flex-1 flex-column">
                <div className="text-lg font-bold flex justify-center items-center"></div>
                {/* place the current day info here */}
                <div className="h-2/3 mt-20 bg-indigo-400 flex-1 flex-column">
                  <div className="p-8">
                    Todays Date: {convertTime(result.dt)}
                  </div>
                  <div className="p-8 h-1/3">{result.weather[0].main}</div>
                  <div className="p-8">
                    Current Weather: {result.weather[0].description}
                  </div>
                  <div className="p-8">
                    Temp: {Math.floor(result.temp.day - 273)}°C or{" "}
                    {Math.floor(((result.temp.day - 273) * 9) / 5 + 32)}°F
                  </div>
                </div>
              </div>
              <div className="bg-slate-400 rounded-lg flex-1 flex-column">
                <div className="h-1/3 bg-indigo-700">
                  <div className="p-3 h-1/4">Alt info for the current day</div>
                  <div className="p-3">
                    Wind info:{" "}
                    {checkDirection(result.wind_deg) +
                      "ward " +
                      result.wind_gust +
                      " Gust " +
                      result.wind_speed +
                      " Wind Speed "}
                  </div>
                  <div className="p-3">Index info</div>
                  <div className="p-3">
                    Extra info about the day maybe holiday?
                  </div>
                  <h2>
                    UV index:{" "}
                    <span className={uvColor(result.uvi)}>{result.uvi}</span>
                  </h2>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
