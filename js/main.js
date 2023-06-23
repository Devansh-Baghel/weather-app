import { getWeatherFromCity, getCityFromIp, getCountryFromIp } from "./utils";
const weather = await getCountryFromIp();
const as = await getCityFromIp();
console.log(weather);
console.log(as);