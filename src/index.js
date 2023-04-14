let currentDate = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = document.querySelector("#currentDay");
let currentTime = document.querySelector("#currentTime");
currentDay.innerHTML = weekdays[currentDate.getDay()];
currentTime.innerHTML = `${currentDate.getHours()} : ${currentDate.getMinutes()}`;

// User Searched Position
function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let degree = document.querySelector("#degree");
  degree.innerHTML = temperature;
  console.log(response);

  let city = document.querySelector("#currentCity");
  city.innerHTML = response.data.name;

  let desc = document.querySelector("#desc");
  desc.innerHTML = response.data.weather[0].description;
}

function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#searchInput").value;
  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  axios.get(`${apiUrl}&units=metric`).then(showTemp);
}

let searchbtn = document.querySelector("#searchbtn");
searchbtn.addEventListener("click", submit);

// Current Position
function showCurrentTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let degree = document.querySelector("#degree");
  degree.innerHTML = temperature;
  console.log(response);

  let city = document.querySelector("#currentCity");
  city.innerHTML = response.data.name;

  let desc = document.querySelector("#desc");
  desc.innerHTML = response.data.weather[0].description;
}
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  axios.get(`${apiUrl}&units=metric`).then(showCurrentTemp);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentbtn = document.querySelector("#currentbtn");
currentbtn.addEventListener("click", currentLocation);

// Changing Degree F -> C && C -> F
let degree = document.querySelector("#degree");

let c = true;
let f = false;
let changeToCel = function () {
  if (f) {
    degree.innerHTML = Number(degree.innerHTML) - 32;
    c = true;
    f = false;
  } else {
  }
};
let changeToFah = function () {
  if (c) {
    degree.innerHTML = Number(degree.innerHTML) + 32;
    f = true;
    c = false;
  } else {
  }
};
let cel = document.querySelector("#cel");
let fah = document.querySelector("#fah");
cel.addEventListener("click", changeToCel);
fah.addEventListener("click", changeToFah);
