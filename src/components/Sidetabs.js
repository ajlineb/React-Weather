import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidetabs() {
  const tabs = ["", "Maps"];
  const [active, setActive] = useState(tabs[0]);

  useEffect(() => {
    setActive(tabs[0]);
  }, []);

  const handleTab = (tab) => {
    if (tab === tabs[0]) {
      return "Home";
    }
    if (tab === tabs[1]) {
      return "Maps";
    }
  };

  const isActive = (tab) => {
    if (active === tab) return true;
    else return false;
  };

  const path = window.location.href.split("/");
  //console.log(path[4]);
  return (
    <div className="flex flex-col p-3 gap-20 flex-initial shadow-lg bg-slate-800 w-28">
      <div className="sticky top-0">
        {tabs.map((tab, index) => {
          return (
            <div className="pb-3 pt-3">
              <Link
                to={tab}
                key={index}
                onClick={() => {
                  setActive(tab);
                }}
                className={
                  path[4] === tab
                    ? `h-20 bg-gradient-to-l from-red-500 via-purple-500 rounded-md flex justify-center items-center text-slate-100 font-bold `
                    : `h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md flex justify-center items-center `
                }
              >
                {handleTab(tab)}
              </Link>
            </div>
          );
        })}
        <div className="pb-6 pt-3">
          <a key={3} href="https://www.linkedin.com/in/anthjlin/">
            <div className="h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md flex justify-center items-center">
              Linkdin
            </div>
          </a>
        </div>
        <div className="pb-6">
          <a key={4} href="https://github.com/ajlineb">
            <div className="h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md flex justify-center items-center">
              Github
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
