//reworking the apiSearch
let cityInfoValues = [];

class ApiSearchV2 {
  //get users location
  getLocation(data) {
    let lat = data[0];
    let long = data[1];
    let apiData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(apiData)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network was interuppted");
        }
        return res.json();
      })
      .then((d) => {
        // if (d.length < 1) {
        //   alert("That is not a valid city");
        // }
        console.log(d);
        cityInfoValues.push(d);
        localStorage.setItem(`CityInfo`, JSON.stringify(cityInfoValues));
        return d;
      })
      .catch((error) => {
        console.error("There was a problem finding that city/location", error);
      });
  }

  //for finding lat/long
  getCityLocation(data) {
    let apiData = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;

    fetch(apiData)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network was interruppted");
        }
        return res.json();
      })
      .then((d) => {
        if (d.length < 1) {
          alert("That was not a valid city");
        }
        console.log(d[0].lat, d[0].lon);
        let coords = [d[0].lat, d[0].lon];

        this.getLocation(coords);
      });
  }
}

export default new ApiSearchV2();
