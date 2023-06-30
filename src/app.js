function updateTime() {
  let newYorkDateElement = document.querySelector("#new-york-date");
  newYorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("ddd, MMM Do YYYY");

  let newYorkTimeElement = document.querySelector("#new-york-time");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("hh:mm:ss A");

  let parisDateElement = document.querySelector("#paris-date");
  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("ddd, MMM Do YYYY");

  let parisTimeElement = document.querySelector("#paris-time");
  parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("hh:mm:ss A");

  let vancouverDateElement = document.querySelector("#vancouver-date");
  vancouverDateElement.innerHTML = moment()
    .tz("America/Vancouver")
    .format("ddd, MMM Do YYYY");

  let vancouverTimeElement = document.querySelector("#vancouver-time");
  vancouverTimeElement.innerHTML = moment()
    .tz("America/Vancouver")
    .format("hh:mm:ss A");
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  console.log(cityTimezone);
}

updateTime();
setInterval(updateTime, 1000);

let dropdownSelect = document.querySelector("#dropdown");
dropdownSelect.addEventListener("change", updateCity);
