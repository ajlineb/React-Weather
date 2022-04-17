import React, { useState, useEffect } from "react";
import data from "../utils/imageBase";

export default function Weather() {
  const [value, setValue] = useState(null);
  const [storage, setStorage] = useState(null);

  const handleInfo = () => {};
  //will use this to rerender weather info on the page as the local storage has changed
  useEffect(() => {}, [storage]);
  return;
}
