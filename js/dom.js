import {
	IP,
	getWeatherFromCity
} from "./utils";

const humidityFromIp = `${IP.getHumidity()}%`
const conditionFromIp = IP.getCondition();
const cityFromIp = IP.getCity();
const countryFromIp = IP.getCountry();
const rainFromIp = `${IP.getRain()}cm`
const windFromIp = `${IP.getWind()}km/h`
const celsiusFromIp = `${IP.getTempCelsius()}°C`
const fahrenheitFromIp = `${IP.getTempFahrenheit()}°F`

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

// console.log(humidityFromSearch, conditionFromSearch, cityFromSearch, countryFromSearch, rainFromSearch, windFromSearch, celsiusFromSearch, fahrenheitFromSearch);


