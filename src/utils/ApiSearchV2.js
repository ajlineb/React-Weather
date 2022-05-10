//reworking the apiSearch
let cityInfoValues = [];
if (localStorage.getItem("CityInfo")) {
  cityInfoValues = JSON.parse(localStorage.getItem("CityInfo"));
}
//will set the array above to contain the values in the localstorage upon return to the page

class ApiSearchV2 {
  //get users location
  getLocation(lat, long) {
    let apiData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(apiData)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network was interuppted");
        }
        return res.json();
      })
      .then((d) => {
        console.log(d);
        cityInfoValues = JSON.parse(localStorage.getItem("CityInfo")); //will look up the current data in local storage so it doesnt add old info
        if (cityInfoValues === null) {
          cityInfoValues = []; //if the local storage has nothing then it will set it to an empty array
        }
        //this will check to make sure duplicate data is not in the array
        if (cityInfoValues.length > 0) {
          for (let i = 0; i < cityInfoValues.length; i++) {
            //console.log(cityInfoValues[i].city.name, d.city.name);
            if (cityInfoValues[i].city.name === d.city.name) {
              //console.log("deleted!");
              cityInfoValues.splice(i, 1);
              //return;
            }
          }
        }

        cityInfoValues.push(d);
        //console.log(cityInfoValues);

        localStorage.setItem(`CityInfo`, JSON.stringify(cityInfoValues));
        console.log(d);
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
        // if (d.length < 1) {
        //   alert("That was not a valid city");
        // }
        console.log(d);
        return d[0].lat, d[0].lon;
      });
  }

  clearLocal() {
    localStorage.clear();
  }
}

export default new ApiSearchV2();
