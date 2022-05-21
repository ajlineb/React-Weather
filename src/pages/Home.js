import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidetabs from "../components/Sidetabs";

//import Current_Weather from "../components/Current_Weather";

export default function Home() {
  const [searchResults, setSearchResults] = useState(null);
  const [data, setData] = useState(null);

  if (searchResults) {
    console.log(searchResults.list);
  }
  const display = () => {
    if (!searchResults) return;
    searchResults.list.map((result) => {
      return <>{result.main.temp}</>;
    });
  };
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
        searchResults.list.map((result, id) => {
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
                  <div className="p-8">Todays Date: {result.dt_txt}</div>
                  <div className="p-8 h-1/3">{result.weather[0].main}</div>
                  <div className="p-8">
                    Current Weather: {result.weather[0].main}
                  </div>
                  <div className="p-8">
                    Temp: {Math.floor(result.main.temp - 273)}°C or{" "}
                    {Math.floor(((result.main.temp - 273) * 9) / 5 + 32)}°F
                  </div>
                </div>
              </div>
              <div className="bg-slate-400 rounded-lg flex-1 flex-column">
                <div className="h-1/3 bg-indigo-700">
                  <div className="p-3 h-1/4">Alt info for the current day</div>
                  <div className="p-3">Wind info</div>
                  <div className="p-3">Index info</div>
                  <div className="p-3">
                    Extra info about the day maybe holiday?
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
