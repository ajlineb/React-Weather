import React, { useState } from "react";
import SearchBar from "./SearchBar";
import GetLocation from "../utils/getLocation";

export default function Header() {
  return (
    <div className="flex flex-row flex-initial shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-28 bg-slate-900">
        <a href="/weather_dashboard">
          <img src="https://picsum.photos/150" alt="site logo"></img>
        </a>
      </div>
      <SearchBar />
      <GetLocation />
    </div>
  );
}
