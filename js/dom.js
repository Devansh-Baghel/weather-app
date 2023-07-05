import { IP, getWeatherFromCity } from "./utils";

const body = document.querySelector("body");
const locationText = document.querySelector("#location-text");
const dateText = document.querySelector("#date-text");
const conditionImg = document.querySelector("#condition-img");
const temprature = document.querySelector("#temprature");
const conditionText = document.querySelector("#condition-text");
const rainValue = document.querySelector("#rain-value");
const windValue = document.querySelector("#wind-value");
const humidityValue = document.querySelector("#humidity-value");
const uvIndexValue = document.querySelector("#uv-index");
const cloudCoverValue = document.querySelector("#cloud-cover");

// Forecast Selectors
const forecastDay1 = document.querySelector("#forecast-1-day");
const forecastDay2 = document.querySelector("#forecast-2-day");
const forecastDay3 = document.querySelector("#forecast-3-day");
const forecastTemp1 = document.querySelector("#forecast-1-temp");
const forecastTemp2 = document.querySelector("#forecast-2-temp");
const forecastTemp3 = document.querySelector("#forecast-3-temp");

const weatherFromIp = await IP.getWeather();

const DOM = {
  updateDisplayFromIp: () => {
    locationText.innerHTML = `${weatherFromIp.location.name},<br>${weatherFromIp.location.country}`;
    let date = new Date();
    date = date.toDateString();
    date = date.slice(0, 10);
    dateText.innerText = date;
    conditionImg.src = weatherFromIp.current.condition.icon;
    temprature.innerHTML = `${weatherFromIp.current.temp_c}<sup>°C</sup>`;
    conditionText.innerText = weatherFromIp.current.condition.text;
    rainValue.innerText = `${weatherFromIp.current.precip_mm} mm`;
    windValue.innerText = `${weatherFromIp.current.wind_kph} km/h`;
    humidityValue.innerText = `${weatherFromIp.current.humidity} %`;
    uvIndexValue.innerText = weatherFromIp.current.uv;
    cloudCoverValue.innerText = `${weatherFromIp.current.cloud}%`;

    // Updating forecast
    forecastDay1.innerText = weatherFromIp.forecast.forecastday[0].date;
    forecastDay2.innerText = weatherFromIp.forecast.forecastday[1].date;
    forecastDay3.innerText = weatherFromIp.forecast.forecastday[2].date;
    forecastTemp1.innerText = `${weatherFromIp.forecast.forecastday[0].day.avgtemp_c} °C`;
    forecastTemp2.innerText = `${weatherFromIp.forecast.forecastday[1].day.avgtemp_c} °C`;
    forecastTemp3.innerText = `${weatherFromIp.forecast.forecastday[2].day.avgtemp_c} °C`;

    DOM.updateDayNight(weatherFromIp.current.is_day);
  },

  updateDisplayFromSearch: async (city) => {
    const weatherFromSearch = await getWeatherFromCity(city);
    locationText.innerHTML = `${weatherFromSearch.location.name},<br>${weatherFromSearch.location.country}`;
    conditionImg.src = weatherFromSearch.current.condition.icon;
    temprature.innerHTML = `${weatherFromSearch.current.temp_c}<sup>°C</sup>`;
    conditionText.innerText = weatherFromSearch.current.condition.text;
    rainValue.innerText = `${weatherFromSearch.current.precip_mm} mm`;
    windValue.innerText = `${weatherFromSearch.current.wind_kph} km/h`;
    humidityValue.innerText = `${weatherFromSearch.current.humidity} %`;
    uvIndexValue.innerText = weatherFromSearch.current.uv;
    cloudCoverValue.innerText = `${weatherFromSearch.current.cloud}%`;

    DOM.updateDayNight(weatherFromSearch.current.is_day);

    // Updating forecast display
    forecastDay1.innerText = weatherFromSearch.forecast.forecastday[0].date;
    forecastDay2.innerText = weatherFromSearch.forecast.forecastday[1].date;
    forecastDay3.innerText = weatherFromSearch.forecast.forecastday[2].date;
    forecastTemp1.innerText = `${weatherFromSearch.forecast.forecastday[0].day.avgtemp_c} °C`;
    forecastTemp2.innerText = `${weatherFromSearch.forecast.forecastday[1].day.avgtemp_c} °C`;
    forecastTemp3.innerText = `${weatherFromSearch.forecast.forecastday[2].day.avgtemp_c} °C`;
  },

  updateDayNight: (isDay) => {
    if (isDay === 1) {
      body.classList.remove("night");
      body.classList.add("day");
    } else {
      body.classList.remove("day");
      body.classList.add("night");
    }
  }

};

export { DOM };
