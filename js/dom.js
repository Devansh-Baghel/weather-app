import { doc } from "prettier";
import {
	IP,
	getWeatherFromCity
} from "./utils";

const humidityFromIp = `${IP.getHumidity()}%`
const conditionFromIp = IP.getCondition();
const conditionIconFromIp = IP.getConditionImg();
const cityFromIp = IP.getCity();
const countryFromIp = IP.getCountry();
const rainFromIp = `${IP.getRain()}cm`
const windFromIp = `${IP.getWind()}km/h`
const celsiusFromIp = IP.getTempCelsius()
const fahrenheitFromIp = IP.getTempFahrenheit()

// console.log(humidityFromIp, conditionFromIp, cityFromIp, countryFromIp, rainFromIp, windFromIp, celsiusFromIp, fahrenheitFromIp);

const weatherFromSearch = await getWeatherFromCity("New Delhi");
const humidityFromSearch = `${weatherFromSearch.current.humidity}%`
const conditionFromSearch = weatherFromSearch.current.condition.text;
const cityFromSearch = weatherFromSearch.location.name;
const countryFromSearch = weatherFromSearch.location.country;
const rainFromSearch = `${weatherFromSearch.current.precip_mm / 10}cm`
const windFromSearch = `${weatherFromSearch.current.wind_kph}km/h`
const celsiusFromSearch = `${weatherFromSearch.current.temp_c}°C`
const fahrenheitFromSearch = `${weatherFromSearch.current.temp_f}°F`


const locationText = document.querySelector("#location-text");
const dateText = document.querySelector("#date-text");
const conditionImg = document.querySelector("#condition-img");
const temprature = document.querySelector("#temprature");
const conditionText = document.querySelector("#condition-text");
const rainValue = document.querySelector("#rain-value");
const windValue = document.querySelector("#wind-value");
const humidityValue = document.querySelector("#humidity-value");


// console.log(humidityFromSearch, conditionFromSearch, cityFromSearch, countryFromSearch, rainFromSearch, windFromSearch, celsiusFromSearch, fahrenheitFromSearch);

const DOM = {
	updateDisplayFromIp: () => {
		locationText.innerHTML = `${cityFromIp},<br>${countryFromIp}`
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
	}
}

export {
	DOM
}