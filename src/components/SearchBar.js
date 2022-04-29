import React, { useState } from "react";
import ApiSearchV2 from "../utils/ApiSearchV2";
import image from "../img/magnify.svg";

//handles what the search bar does
//updates as info is written in the onchange function
//onsubmit the data is passed from the searchbar to the ApiSearch function

//add a toggle switch for city search and zip search

export default function SearchBox() {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a city name"); //if search button is clicked with no info
    } else {
      ApiSearchV2.getCityLocation(text);
      //ApiSearch(text); //sends the text in the search bar to the apiSearch function
      setText(""); //resets the searchbar to empty
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="city-search basis-1/3 flex justify-center items-center  "
    >
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
          value={text}
          onChange={onChange}
        ></input>
      </div>
      <button
        className="px-3 py-2 text-white font-bold rounded-r-lg bg-indigo-700 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-700 shrink h-10"
        type="submit"
      >
        Search!
      </button>
    </form>
  );
}
