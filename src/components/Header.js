import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import GetLocation from "../utils/GetLocation";
import WeatherTabFetch from "./WeatherTabFetch";

// <weathertabfetch setSearchResults2 = {setSearchResults2}
//                  variable name         data sent or retrieved

export default function Header({ setSearchResults }) {
  const [searchResults2, setSearchResults2] = useState("");
  const [searchResults3, setSearchResults3] = useState("");
  const [getLocation, setGetLocation] = useState("");
  useEffect(() => {
    setSearchResults(searchResults2);
  }, [searchResults2]);

  useEffect(() => {
    setGetLocation(searchResults3);
  }, [searchResults3]);

  // console.log(searchResults3, "this is the data"); Used for checking the proper data is being passed through the Get location component

  // console.log(searchResults2, "city search data");  used for checking the proper data is being passed through from typing in a city/location

  return (
    <div className="flex flex-row flex-initial shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-20">
      {/* <div className="w-28 bg-slate-900">
        <a href="/React-Weather">
          <img src="https://picsum.photos/150" alt="site logo"></img>
        </a>
      </div> */}
      <WeatherTabFetch
        setSearchResults2={setSearchResults2}
        searchResults3={searchResults3}
      />
      <GetLocation setSearchResults3={setSearchResults3} />
    </div>
  );
}
