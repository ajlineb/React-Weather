//equire("dotenv").config();

export default function ApiSearch(data) {
  const apiLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;

  const findLocation = (apiData) => {
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
      })
      .catch((error) => {
        console.error("There was a problem finding that city", error);
      });
  };

  return findLocation(apiLocation);
}
