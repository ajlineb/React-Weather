import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import data from "../utils/imageBase";
import Sidetabs from "../components/Sidetabs";

//will continue to add more types as I discover the types the API has
const weatherTypes = [
  "few clouds",
  "light rain",
  "clear sky",
  "overcast clouds",
  "broken clouds",
  "scattered clouds",
  "moderate rain",
  "heavy intensity rain",
];

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

  //function for determining which animated image will show
  const handleImage = (weather) => {
    if (!weather) return;
    //checks if clear skyes
    if (weather === weatherTypes[2]) {
      return (
        <img className="rounded-lg" src={data[9].src} alt={data[9].alt}></img>
      );
    }
    //checks if cloudy
    if (
      weather === weatherTypes[0] ||
      weather === weatherTypes[3] ||
      weather === weatherTypes[4]
    ) {
      return (
        <img className="rounded-lg" src={data[0].src} alt={data[0].alt}></img>
      );
    }
    //checks if partly cloudy
    if (weather === weatherTypes[5]) {
      return (
        <img className="rounded-lg" src={data[5].src} alt={data[5].alt}></img>
      );
    }
    //checks if raining
    if (weather === weatherTypes[1]) {
      return (
        <img className="rounded-lg" src={data[1].src} alt={data[1].alt}></img>
      );
    }
    //checks if heavy raining
    if (weather === weatherTypes[7]) {
      return (
        <img className="rounded-lg" src={data[10].src} alt={data[10].alt}></img>
      );
    }
    //checks for monderate showers
    if (weather === weatherTypes[6]) {
      return (
        <img className="rounded-lg" src={data[7].src} alt={data[7].alt}></img>
      );
    }
    return <div className="rounded-lg">{weather}</div>;
  };

  console.log(JSON.stringify(searchResults));
  return (
    <>
      <Header setSearchResults={setSearchResults} />
      <div className="grid grid-col-7 grid-flow-col p-2 gap-4 bg-green-200">
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
              <div key={id} className="flex-1 grid grid-col-2 grid-flow-col">
                <div className="rounded-lg mb-16 flex-1 flex-column">
                  <div className="text-lg font-bold flex justify-center items-center"></div>
                  {/* place the current day info here */}
                  <div className="h-2/3 bg-indigo-400 rounded-t-lg flex-1 flex-column">
                    <div className="p-5">
                      Todays Date: {convertTime(result.dt)}
                    </div>
                    <div className="p-5 h-1/3">
                      {handleImage(result.weather[0].description)}
                      <p>
                        Weather description: {result.weather[0].description}
                      </p>
                    </div>
                    <div className="p-5">
                      Current Weather: {result.weather[0].main}
                    </div>
                    <div className="p-5">
                      Temp: {Math.floor(result.temp.day - 273)}°C or{" "}
                      {Math.floor(((result.temp.day - 273) * 9) / 5 + 32)}°F
                    </div>
                  </div>
                  <div className="flex-1 flex-column">
                    <div className="h-1/3 bg-indigo-700 rounded-b-lg">
                      <div className="p-3 h-1/4">
                        Alt info for the current day
                      </div>
                      <div className="p-3">
                        Wind info:{" "}
                        {checkDirection(result.wind_deg) +
                          "ward " +
                          result.wind_gust +
                          " Gust " +
                          result.wind_speed +
                          " Wind Speed "}
                      </div>
                      <div className="p-3">
                        Extra info about the day maybe holiday?
                      </div>
                      <h2 className="p-3">
                        UV index:{" "}
                        <span className={uvColor(result.uvi)}>
                          {result.uvi}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
