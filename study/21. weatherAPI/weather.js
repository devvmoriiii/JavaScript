function success(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const key = "dc4a361b9e669dfb6cca009a5f09300b"
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`
  // console.log(APIUrl)

  fetch(APIUrl).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    const cityData = data.name;
    const weatherData = data.weather[0].main
    city.innerText = cityData;
    weather.innerText = weatherData
  })
}
function fail() {
  alert("Failed to load location.");
}

navigator.geolocation.getCurrentPosition(success, fail)