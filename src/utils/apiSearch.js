//will first get the users city lat and long
//and then inject the lat and long into a new fetch for the towns weather
//want to ask the users location to get the lat and long that way eventually
export default function ApiSearch(data, type) {
  //data will either contain a city name with a type of false
  //or data will contain coords with a type of true
  const apiLocationCity = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;
  const lat = data[0];
  const long = data[1];
  //this also gives a lot of data https://api.openweathermap.org/data/2.5/forecast?  or https://api.openweathermap.org/data/2.5/onecall?
  const apiLocationLATLONG = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`;
  console.log(data, type);

  //used if location services were used
  const findLocation = (apiData) => {
    fetch(apiData)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network Was interuppted!");
        }
        return res.json();
      })
      .then((d) => {
        if (d.length < 1) {
          alert("That is not a valid city");
        }
        console.log(d);
        localStorage.setItem(`${d.city.name}`, JSON.stringify(d));
        return d;
      })
      .catch((error) => {
        console.error("There was a problem finding that city", error);
      });
  };

  //for finding the lat/long
  const findLocationCity = (apiData) => {
    fetch(apiData)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network Was interuppted!");
        }
        return res.json();
      })
      .then((d) => {
        if (d.length < 1) {
          alert("That is not a valid city");
        }
        console.log(d[0].lat, d[0].lon);
        const lat = d[0].lat;
        const lon = d[0].lon;
        findWeatherInfo(lat, lon);
        return;
      })
      .catch((error) => {
        console.error("There was a problem finding that city", error);
      });
  };

  //gets the weather info for the desired City
  const findWeatherInfo = (lat, lon) => {
    const apiData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(apiData)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network Was interuppted!");
        }
        return res.json();
      })
      .then((d) => {
        if (d.length < 1) {
          alert("That is not a valid city");
        }
        console.log(d);
        localStorage.setItem(`${d.city.name}`, JSON.stringify(d));
        return d;
      })
      .catch((error) => {
        console.error("There was a problem finding that city", error);
      });
  };
  type ? findLocation(apiLocationLATLONG) : findLocationCity(apiLocationCity);
  return;
}
