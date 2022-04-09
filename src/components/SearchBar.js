import React from "react";

export default function SearchBox(props) {
  return (
    <input
      id="city_search"
      className="px-3 py-2 w-1/2 border-2 rounded-l-md border-slate-700 focus:outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700 placeholder:italic shrink h-10"
      type="search"
      placeholder="Search a City..."
      onChange={props.handleChange}
    ></input>
  );
}
