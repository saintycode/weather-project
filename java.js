let now = new Date();
let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let days = now.getDay();
let date = day[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let h2 = document.querySelector("#date");
h2.innerHTML = `${date} ${month} ${hour}:${minutes}`;

function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#form-city");
  let h1 = document.querySelector("#header");
  h1.innerHTML = input.value;
}
let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

let temperature = document.querySelector("#temperature");

function celcius(event) {
  event.preventDefault();
  let link = document.querySelector("#temperature");
  link.innerHTML = 19;
}
let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", celcius);

function farenheit(event) {
  event.preventDefault();
  let link = document.querySelector("#temperature");
  let temperature = link.innerHTML;
  let farenheitFormula = Math.round(temperature * 1.8 + 32);
  link.innerHTML = farenheitFormula;
}
let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", farenheit);
