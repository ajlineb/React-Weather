import React, { useState, useEffect } from "react";
import image from "../img/magnify.svg";

export default function WeatherTabFetch() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      if (!resJson || resJson[0] === undefined) {
        setCity(null);
        return;
      }
      const coords = [resJson[0].lat, resJson[0].lon];
      const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0]}&lon=${coords[1]}&appid=${process.env.REACT_APP_API_KEY}`;
      const response2 = await fetch(url2);
      const resJson2 = await response2.json();

      console.log(resJson2);
      setCity(resJson2);
    };
    fetchAPI();
  }, [search]);
  return (
    <div className="city-search basis-1/3 flex justify-center items-center  ">
      <div className=" w-1/2 shrink relative">
        <img
          className="absolute left-3 h-5 top-1/2 -translate-y-1/2"
          type="image"
          src={image}
          alt="magnifier"
        ></img>
        <input
          className="w-full pl-9 border-2 rounded-l-md border-slate-700 focus:outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700 placeholder:italic shrink h-10"
          id="city_search"
          type="search"
          placeholder="Search a City..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
      </div>
      <button
        className="px-3 py-2 text-white font-bold rounded-r-lg bg-indigo-700 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-700 shrink h-10"
        type="submit"
      >
        Search!
      </button>
      {!city || city === undefined ? (
        <div>
          <h3>
            <b>No Data Found</b>
          </h3>
        </div>
      ) : (
        <div>
          <div className="info">
            <h2 className="location">
              <i class="fas fa-street-view"></i>
              {city.city.name}
            </h2>
            <h1 className="temp">{city.list[0].main.temp}</h1>
            <h3 className="tempmin_max">
              {city.list[0].main.temp_min} Cel | {city.list[0].main.temp_max}Cel
            </h3>
          </div>
          <div className="wave- one"></div>

          <div className="wave- two"></div>

          <div className="wave- three"></div>
        </div>
      )}
    </div>
  );
}
