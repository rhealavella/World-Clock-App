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
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimezone);
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#displayed-cities");
  citiesElement.innerHTML = `<div class="container">
        <div class="container text-center">
          <div class="row row-cols-2">
            <div class="col" id="city">
              ${cityName}
              <br />
              <p id="city-date">${cityTime.format("ddd, MMM Do YYYY")}</p>
            </div>
            <div class="col" id="city-time">${cityTime.format(
              "hh:mm:ss A"
            )}</div>
            </div>
            </div>
            <a  id="home-link" href="/">Home 🏡</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let dropdownSelect = document.querySelector("#dropdown");
dropdownSelect.addEventListener("change", updateCity);
