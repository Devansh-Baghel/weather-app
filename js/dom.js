import { IP, getWeatherFromCity } from "./utils";

const humidityFromIp = `${IP.getHumidity()}%`;
const conditionFromIp = IP.getCondition();
const conditionIconFromIp = IP.getConditionImg();
const cityFromIp = IP.getCity();
const countryFromIp = IP.getCountry();
const rainFromIp = `${IP.getRain()}mm`;
const windFromIp = `${IP.getWind()}km/h`;
const celsiusFromIp = IP.getTempCelsius();
const fahrenheitFromIp = IP.getTempFahrenheit();

const locationText = document.querySelector("#location-text");
const dateText = document.querySelector("#date-text");
const conditionImg = document.querySelector("#condition-img");
const temprature = document.querySelector("#temprature");
const conditionText = document.querySelector("#condition-text");
const rainValue = document.querySelector("#rain-value");
const windValue = document.querySelector("#wind-value");
const humidityValue = document.querySelector("#humidity-value");
const body = document.querySelector("body");

const DOM = {
  updateDisplayFromIp: () => {
    locationText.innerHTML = `${cityFromIp},<br>${countryFromIp}`;
    let date = new Date();
    date = date.toDateString();
    date = date.slice(0, 10);
    dateText.innerText = date;
    conditionImg.src = conditionIconFromIp;
    temprature.innerHTML = `${celsiusFromIp}<sup>°C</sup>`;
    conditionText.innerText = conditionFromIp;
    rainValue.innerText = rainFromIp;
    windValue.innerText = windFromIp;
    humidityValue.innerText = humidityFromIp;

    DOM.updateDayNight(IP.getIsDay());
  },

  updateDisplayFromSearch: async (city) => {
    const weatherFromSearch = await getWeatherFromCity(city);
    locationText.innerHTML = `${weatherFromSearch.location.name},<br>${weatherFromSearch.location.country}`;
    conditionImg.src = weatherFromSearch.current.condition.icon;
    temprature.innerHTML = `${weatherFromSearch.current.temp_c}<sup>°C</sup>`;
    conditionText.innerText = weatherFromSearch.current.condition.text;
    rainValue.innerText = `${weatherFromSearch.current.precip_mm}mm`;
    windValue.innerText = `${weatherFromSearch.current.wind_kph}km/h`;
    humidityValue.innerText = `${weatherFromSearch.current.humidity}%`;

    DOM.updateDayNight(weatherFromSearch.current.is_day);
  },

  updateDayNight: (isDay) => {
    if (isDay === 1) {
      body.classList.remove("night");
      body.classList.add("day");
    } else {
      body.classList.remove("day");
      body.classList.add("night");
    }
  },
};

export { DOM };
