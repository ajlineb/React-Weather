import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import data from "../utils/imageBase";
import Sidetabs from "../components/Sidetabs";
import WeatherTabFetch from "../components/WeatherTabFetch";

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
  "very heavy rain",
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

  const removeDate = (date) => {
    if (!data || undefined) return;
    //console.log(date);
    return date.split(" ")[1] + " " + date.split(" ")[2];
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
        <img
          className="rounded-lg m-auto h-32"
          src={data[9].src}
          alt={data[9].alt}
        ></img>
      );
    }
    //checks if cloudy
    if (
      weather === weatherTypes[0] ||
      weather === weatherTypes[3] ||
      weather === weatherTypes[4]
    ) {
      return (
        <img
          className="rounded-lg m-auto h-32"
          src={data[0].src}
          alt={data[0].alt}
        ></img>
      );
    }
    //checks if partly cloudy
    if (weather === weatherTypes[5]) {
      return (
        <img
          className="rounded-lg m-auto h-32"
          src={data[5].src}
          alt={data[5].alt}
        ></img>
      );
    }
    //checks if raining
    if (weather === weatherTypes[1]) {
      return (
        <img
          className="rounded-lg m-auto h-32"
          src={data[1].src}
          alt={data[1].alt}
        ></img>
      );
    }
    //checks if heavy raining
    if (weather === weatherTypes[7] || weather === weatherTypes[8]) {
      return (
        <img
          className="rounded-lg m-auto h-32"
          src={data[10].src}
          alt={data[10].alt}
        ></img>
      );
    }
    //checks for monderate showers
    if (weather === weatherTypes[6]) {
      return (
        <img
          className="rounded-lg m-auto h-32"
          src={data[7].src}
          alt={data[7].alt}
        ></img>
      );
    }
    return <div className="rounded-lg m-auto">{weather}</div>;
  };

  //console.log(JSON.stringify(searchResults));
  return (
    <div className="basis-3/4 grow">
      <Header setSearchResults={setSearchResults} />
      <div className=" flex flex-row">
        {/* <Sidetabs className="basis-1/4" /> */}
        <div className="basis-3/4 flex grow flex-wrap justify-around p-2 gap-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {!searchResults || searchResults === undefined ? (
            <div className="flex justify-center items-center h-screen ">
              <h3 className="h-2/3 text-3xl text-slate-100 font-mono font-black">
                <b>
                  Start typing into the search bar to see your city/location
                  weather!
                </b>
              </h3>
            </div>
          ) : (
            searchResults.daily.map((result, id) => {
              //this is where the goods is going!!!
              return (
                <div key={id} className="basis-1/5">
                  <div className="rounded-lg mb-16 ">
                    <div className="text-lg font-bold "></div>
                    {/* place the current day info here */}
                    <div className="h-2/3 bg-indigo-400 rounded-t-lg ">
                      <div className="p-5">
                        <span className="font-bold">Date:</span>{" "}
                        {convertTime(result.dt).split(",")[0]}
                      </div>
                      <div className="p-5 h-1/3">
                        {handleImage(result.weather[0].description)}
                        <p>
                          <span className="font-bold">
                            Weather description:
                          </span>{" "}
                          {result.weather[0].description}
                        </p>
                      </div>
                      <div className="p-5">
                        <span className="font-bold">Current Weather:</span>{" "}
                        {result.weather[0].main}
                      </div>
                      <div className="p-5">
                        <span className="font-black">Temp:</span>{" "}
                        {Math.floor(result.temp.day - 273)}°C or{" "}
                        {Math.floor(((result.temp.day - 273) * 9) / 5 + 32)}°F
                      </div>
                    </div>
                    <div className="">
                      <div className="h-1/3 bg-indigo-700 rounded-b-lg grid grid-cols-2 gap-2">
                        <div>
                          <div className="p-5 h-1/4 font-black">
                            Information
                          </div>
                          <div className="p-5">
                            <span className="font-black">Wind:</span>{" "}
                            {checkDirection(result.wind_deg) +
                              "ward " +
                              result.wind_gust +
                              " Gust " +
                              result.wind_speed +
                              " Wind Speed "}
                          </div>
                          {/* <div className="p-3">
                        Extra info about the day maybe holiday?
                      </div> */}
                          <h2 className="p-5">
                            <span className="font-black">UV index:</span>{" "}
                            <span className={uvColor(result.uvi)}>
                              {result.uvi}
                            </span>
                          </h2>
                        </div>
                        <div>
                          <div className="p-5"></div>
                          <div className="p-5">
                            <span className="font-bold">Sunrise:</span>
                            <br />
                            {removeDate(convertTime(result.sunrise))}
                          </div>
                          <div className="p-5">
                            <span className="font-bold">Sunset:</span>
                            <br />
                            {removeDate(convertTime(result.sunset))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
