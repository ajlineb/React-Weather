//equire("dotenv").config();

export default function ApiSearch(data) {
  const apiLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;

  return console.log(apiLocation);
}
