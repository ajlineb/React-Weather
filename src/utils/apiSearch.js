//will first get the users city lat and long
//and then inject the lat and long into a new fetch for the towns weather
//want to ask the users location to get the lat and long that way eventually
export default function ApiSearch(data, type) {
  //data will either contain a city name with a type of false
  //or data will contain coords with a type of true
  const apiLocationCity = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;
  const lat = data[0];
  const long = data[1];
  //this also gives a lot of data https://api.openweathermap.org/data/2.5/forecast?
  const apiLocationLATLONG = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`;
  console.log(data, type);
  const findLocation = (apiData, bool) => {
    if (bool) {
    } else {
      fetch(apiData)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network Was interuppted!");
          }
          return res.json();
        })
        .then((data) => {
          if (data.length < 1) {
            alert("That is not a valid city");
          }
          console.log(data);

          return data;
        })
        .catch((error) => {
          console.error("There was a problem finding that city", error);
        });
    }
  };
  type ? findLocation(apiLocationLATLONG) : findLocation(apiLocationCity);
  return;
}
