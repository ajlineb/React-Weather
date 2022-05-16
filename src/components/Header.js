import React, { useState } from "react";
import SearchBar from "./SearchBar";
import GetLocation from "../utils/GetLocation";
import WeatherTabFetch from "./WeatherTabFetch";

class Header extends React.Component {
  state = {
    data: null,
  };
  handlCallback = (childData) => {
    this.setState({ data: childData });
  };
  onTrigger = () => {
    this.props.parentCallback("welcom to GFG");
  };
  render() {
    console.log(this.state);
    return (
      <div className="flex flex-row flex-initial shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="w-28 bg-slate-900">
          <a href="/weather_dashboard">
            <img src="https://picsum.photos/150" alt="site logo"></img>
          </a>
        </div>
        <WeatherTabFetch parentCallback2={this.handlCallback} />
        <GetLocation />
      </div>
    );
  }
}

export default Header;
