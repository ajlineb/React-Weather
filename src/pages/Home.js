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
      <div className="flex-1 grid grid-col-3 grid-flow-col gap-4 p-5">
        <div className="bg-slate-400 rounded-lg">ree</div>
        <div className="bg-slate-500 rounded-lg">ree</div>
        <div className="bg-slate-600 rounded-lg">ree</div>
      </div>
    </div>
  );
}
