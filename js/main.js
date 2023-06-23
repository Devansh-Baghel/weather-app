import { getWeatherFromIp, getWeatherFromCity } from "./utils";
const wather = await getWeatherFromIp();
console.log(wather);