import {
	getHumidityFromIp,
	getConditionFromIp,
	getCountryFromIp,
	getCityFromIp,
	getWeatherFromCity
} from "./utils";

const humidity = `${await getHumidityFromIp()}%`
const condition = await getConditionFromIp();
const city = await getCityFromIp();
const country = await getCountryFromIp();

console.log(humidity, condition, city, country);