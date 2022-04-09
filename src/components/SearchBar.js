import React, { useState } from "react";
import ApiSearch from "../utils/apiSearch";

//handles what the search bar does
//updates as info is written in the onchange function
//onsubmit the data is passed from the searchbar to the ApiSearch function

export default function SearchBox() {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a city name"); //if search button is clicked with no info
    } else {
      ApiSearch(text); //sends the text in the search bar to the apiSearch function
      setText(""); //resets the searchbar to empty
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="city-search basis-1/3 flex justify-center items-center "
    >
      <input
        id="city_search"
        className="px-3 py-2 w-1/2 border-2 rounded-l-md border-slate-700 focus:outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700 placeholder:italic shrink h-10"
        type="search"
        placeholder="Search a City..."
        value={text}
        onChange={onChange}
      ></input>

      <button
        className="px-3 py-2 text-white font-bold rounded-r-lg bg-indigo-700 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-700 shrink h-10"
        type="submit"
      >
        Search!
      </button>
    </form>
  );
}
