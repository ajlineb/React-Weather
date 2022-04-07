import React, { useState } from "react";
import Sidetabs from "../components/Sidetabs";

export default function Home() {
  //brainstorm ideas that this home page should have on it..
  //should firstly ask if the user wants to share their location
  //if so, use the lat long to get current weather for their area and display next seven days

  //not for this page but header tabs
  //should contain a map tab at least kinda want to try it out

  return (
    <div className="h-screen pb-16 flex flex-row">
      <Sidetabs />
      <div></div>
    </div>
  );
}
