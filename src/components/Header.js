import React, { useState } from "react";

export default function Header() {
  return (
    <div className="flex flex-row flex-initial">
      <a href="/weather_dashboard">
        <img src="https://picsum.photos/75" alt="site logo"></img>
      </a>
      <form className="city-search basis-1/4  pl-5">
        <input
          className="w-1/2"
          type="text"
          placeholder="Search a City..."
          name="search"
        ></input>
        <button className="px-2 rounded-sm bg-indigo-700" type="submit">
          ree
        </button>
      </form>
    </div>
  );
}
