import React, { useState } from "react";

export default function Header() {
  return (
    <div className="flex flex-row flex-initial shadow-lg">
      <a href="/weather_dashboard">
        <img src="https://picsum.photos/100" alt="site logo"></img>
      </a>
      <form className="city-search basis-1/4 flex justify-center items-center ">
        <input
          className="px-3 py-2 w-1/2 border-2 rounded-l-md border-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700 placeholder:italic shrink h-10"
          type="text"
          placeholder="Search a City..."
          name="search"
        ></input>
        <button
          className="px-3 py-2 text-white font-bold rounded-r-lg bg-indigo-700 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-700 shrink h-10"
          type="submit"
        >
          Search!
        </button>
      </form>
    </div>
  );
}
