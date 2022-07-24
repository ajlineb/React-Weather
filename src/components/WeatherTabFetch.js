import React, { useState, useEffect } from "react";
import image from "../img/magnify.svg";

//to pass multiple data wether sending or retriveing make sure to put them all in brackets! like down below
export default function WeatherTabFetch({ setSearchResults2, searchResults3 }) {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  const [coLocation, setCoLocation] = useState("");

  useEffect(() => {
    if (search === "") return;
    const fetchAPI = async () => {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;

      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      if (!resJson || resJson[0] === undefined || resJson.length === 0) {
        setCity(null);
        setSearchResults2(null);
        return;
      }
      const coords = [resJson[0].lat, resJson[0].lon];
      const url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&appid=${process.env.REACT_APP_API_KEY}`;
      //https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
      const response2 = await fetch(url2);
      const resJson2 = await response2.json();

      //console.log(resJson2);
      setCity(resJson2);
      setSearchResults2(resJson2);
    };

    fetchAPI();
  }, [search]);

  useEffect(() => {
    if (searchResults3 === null) return;
    const fetchAPI = async () => {
      //console.log(searchResults3[0], searchResults3[1]);
      if (searchResults3[0] === undefined || searchResults3[1] === undefined)
        return;

      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${searchResults3[0]}&lon=${searchResults3[1]}&appid=${process.env.REACT_APP_API_KEY}`;
      const response2 = await fetch(url);
      const resJson = await response2.json();

      //console.log(resJson);
      setCity(resJson);
      setSearchResults2(resJson);
    };

    fetchAPI();
  }, [searchResults3]);

  return (
    <div className="city-search basis-1/3 flex justify-center items-center">
      <div className=" w-1/2 shrink relative">
        <img
          className="absolute left-3 h-5 top-1/2 -translate-y-1/2"
          type="image"
          src={image}
          alt="magnifier"
        ></img>
        <input
          className="w-full pl-9 border-2 rounded-md border-slate-700 focus:outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700 placeholder:italic shrink h-10"
          id="city_search"
          type="search"
          placeholder="Search a City..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
