//this will be used to get the users location
//It will either send the info needed or it will send a false response
//if false the user will need to type in a city for location info
import React, { useEffect, useState } from "react";
import ApiSearchV2 from "./ApiSearchV2";

export default function GetLocation({ setGetLocation }) {
  const [lat, setLat] = useState(null);
  const [del, setDel] = useState(null);
  const [long, setLong] = useState(null);
  const [status, setStatus] = useState(null);
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    setGetLocation(coords);
  }, [coords]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by this web browser.");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setDel("Delete");
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
          setCoords([position.coords.latitude, position.coords.longitude]);
          const array = [position.coords.latitude, position.coords.longitude];
          ApiSearchV2.getLocation(array);
        },
        () => {
          setStatus("Unable to get location.");
          setLat(null);
          setLong(null);
          setCoords(null);
        }
      );
    }
  };

  const handleDelete = () => {
    setLat(null);
    setLong(null);
    setDel(null);
    setStatus(null);
    setCoords(null);
  };

  return (
    <div className="p-1 basis-1/3 flex flex-wrap justify-left items-center">
      <button
        className="px-3 py-2 text-white font-bold rounded-lg bg-indigo-700 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-700 shrink h-10"
        onClick={getLocation}
      >
        Get Location
      </button>
      {lat && <h1 className="p-2 font-bold">Coordinates:</h1>}
      {status && <p className="p-2">{status}</p>}
      {lat && (
        <p className="p-2">
          Latitude: <span className="font-bold text-green-400">{lat}</span>
        </p>
      )}
      {long && (
        <p className="p-2">
          Longitude: <span className="font-bold text-teal-300">{long}</span>
        </p>
      )}
      {coords && (
        <p className="p-2">
          Coords:{" "}
          <span className="text-slate-900">{`${coords[0]} lat and ${coords[1]} long`}</span>
        </p>
      )}
      {del && (
        <button
          className=" px-3 py-2 text-white font-bold rounded-lg bg-rose-700 hover:bg-pink-700 active:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-400 shrink h-10"
          onClick={handleDelete}
        >
          Delete Coords
        </button>
      )}
    </div>
  );
}
