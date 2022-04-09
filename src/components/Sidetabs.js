import React, { useState, useEffect } from "react";

export default function Sidetabs() {
  return (
    <div className="flex flex-col p-3 gap-20 flex-initial shadow-lg bg-slate-800 w-28 pt-10 ">
      <div className="h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md flex justify-center items-center">
        Home
      </div>
      <div className="h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md flex justify-center items-center">
        Maps
      </div>
      <a href="https://www.linkedin.com/in/anthjlin/">
        <div className="h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md flex justify-center items-center">
          Linkdin
        </div>
      </a>
      <a href="https://github.com/ajlineb">
        <div className="h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md flex justify-center items-center">
          Github
        </div>
      </a>
    </div>
  );
}
