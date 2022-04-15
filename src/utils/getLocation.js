//this will be used to get the users location
//It will either send the info needed or it will send a false response
//if false the user will need to type in a city for location info
import React, { useState } from "react";
import ApiSearch from "./apiSearch";

export default function GetLocation() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by this web browser.");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
          const array = [position.coords.latitude, position.coords.longitude];
          ApiSearch(array, true);
        },
        () => {
          setStatus("Unable to get location.");
        }
      );
    }
  };

  return (
    <div className="p-1">
      <button
        className="px-3 py-2 text-white font-bold rounded-lg bg-indigo-700 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-700 shrink h-10"
        onClick={getLocation}
      >
        Get Location
      </button>
      {lat && <h1>Coordinates</h1>}
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {long && <p>Longitude: {long}</p>}
    </div>
  );
}
