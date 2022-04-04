import React, { useState } from "react";

export default function Header() {
  return (
    <div className="flex flex-row flex-initial shadow-lg">
      <a href="/weather_dashboard">
        <img src="https://picsum.photos/75" alt="site logo"></img>
      </a>
      <form className="city-search basis-1/4  pl-5 relative ">
        <input
          className="px-3 py-2 w-1/2 absolute top-1/2 -translate-y-1/2 border-2 rounded-md border-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700 placeholder:italic"
          type="text"
          placeholder="Search a City..."
          name="search"
        ></input>
        <button
          className="px-3 py-2 text-white font-bold rounded-lg bg-indigo-700 absolute top-1/2 right-1/4 -translate-y-1/2 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-700"
          type="submit"
        >
          Search!
        </button>
      </form>
    </div>
  );
}
