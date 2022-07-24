import React, { useState } from "react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 font-bold text-center w-full bg-white h-16">
      <h1 className="">
        Created with ❤️ By Anthony Linebaugh
        <a href="https://github.com/ajlineb/React-Weather">
          {" "}
          <span className="text-indigo-500 hover:text-purple-400">
            [Source Code]
          </span>
        </a>
      </h1>

      <h1>© 2022</h1>
    </div>
  );
}
