import React, { useEffect } from "react";
import Sidetabs from "../components/Sidetabs";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function LiveWeather() {
  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://tile.openweathermap.org/map/precipitation/0/0/0.png?appid=${process.env.REACT_APP_API_KEY}`;

      const resp = await fetch(url);
      const resJSON = await resp.json();
      console.log(resJSON);
    };
    fetchAPI();
  });
  useEffect(() => {
    let current_lat = 35.625789;
    let current_long = -79.0547899;
    let current_zoom = 16;
    let center_lat = current_lat;
    let center_long = current_long;
    let center_zoom = current_zoom;

    // The <div id="map"> must be added to the dom before calling L.map('map')
    let map = L.map("map", {
      center: [center_lat, center_long],
      zoom: center_zoom,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  });
  return (
    <div className="flex h-screen pb-16 basis-3/4 grow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="m-auto bg-slate-600 justify-center outline outline-offset-1 outline-4 rounded-lg overflow-hidden">
        <div id="map"></div>
      </div>
    </div>
  );
}
