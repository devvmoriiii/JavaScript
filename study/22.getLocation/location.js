function success(position) {
  console.log(position)
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)
}
function fail() {
  alert("Failed to load location.");
}

navigator.geolocation.getCurrentPosition(success, fail)