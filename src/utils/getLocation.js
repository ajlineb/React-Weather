//this will be used to get the users location
//It will either send the info needed or it will send a false response
//if false the user will need to type in a city for location info

export default function GetLocation() {
  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    let location = `Latitude: ${lat} Longitude: ${lon}`;
    console.log(location);

    return [lat, lon];
  };
  const getLoc = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(showPosition);
    }
    return false;
  };
  return getLoc();
}
