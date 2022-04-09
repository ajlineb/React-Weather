import React, { useState } from "react";
import Sidetabs from "../components/Sidetabs";

export default function Home() {
  //brainstorm ideas that this home page should have on it..
  //should firstly ask if the user wants to share their location
  //if so, use the lat long to get current weather for their area and display next seven days

  //not for this page but header tabs
  //should contain a map tab at least kinda want to try it out

  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  return (
    <div className="h-screen pb-16 flex flex-row">
      <Sidetabs />
      <div className="flex-1 grid grid-col-2 grid-flow-col gap-4 p-5 bg-slate-300">
        <div className="bg-slate-400 rounded-lg flex-1 flex-column">
          <div className="h-2/3 mt-20 bg-indigo-400 flex-1 flex-column">
            <div className="p-8">current Day</div>
            <div className="p-8">Animated image</div>
            <div className="p-8">Weather that day</div>
            <div className="p-8">Temp Avg</div>
          </div>
        </div>
        <div className="bg-slate-400 rounded-lg flex-1 flex-column"></div>
      </div>
    </div>
  );
}
