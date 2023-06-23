import {
	IP,
	getWeatherFromCity
} from "./utils";

const humidity = `${await IP.getHumidity()}%`
const condition = await IP.getCondition();
const city = await IP.getCity();
const country = await IP.getCountry();

console.log(humidity, condition, city, country);