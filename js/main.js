import {
	IP,
	CITY
} from "./utils";

const humidity = `${IP.getHumidity()}%`
const condition = IP.getCondition();
const city = IP.getCity();
const country = IP.getCountry();
const rain = `${IP.getRain()}cm`
const wind = `${IP.getWind()}km/h`
const celsius = `${IP.getTempCelsius()}°C`
const fahrenheit = `${IP.getTempFahrenheit()}°F`

console.log(humidity, condition, city, country, rain, wind, celsius, fahrenheit);

const cityFromSearch = await CITY.getCity("New Delhi");
console.log(cityFromSearch);