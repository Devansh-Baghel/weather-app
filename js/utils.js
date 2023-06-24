const getWeatherFromCity = async (city) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=48df9710e82d465da64214434232006&q=${city}`, { mode: "cors" })
  const data = await response.json();
  return data;
}

const IP = {
  getIp: async () => {
    const response = await fetch(`http://api.weatherapi.com/v1/ip.json?key=48df9710e82d465da64214434232006&q=auto:ip`, { mode: "cors" })
    const data = await response.json();
    return data.ip;
  },

  getWeather: async () => {
    const ip = await IP.getIp();
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=48df9710e82d465da64214434232006&q=${ip}`, { mode: "cors" })
    const data = await response.json();
    return data;
  },

  getRain: () => {
    const rainMm = weatherFromIp.current.precip_mm;
    const rainCm = rainMm / 10;
    return rainCm;
  },

  getCity: () => { return weatherFromIp.location.name },
  getCountry: () => { return weatherFromIp.location.country },
  getCondition: () => { return weatherFromIp.current.condition.text },
  getConditionImg: () => { return weatherFromIp.current.condition.icon },
  getHumidity: () => { return weatherFromIp.current.humidity },
  getWind: () => { return weatherFromIp.current.wind_kph },
  getTempCelsius: () => { return weatherFromIp.current.temp_c },
  getTempFahrenheit: () => { return weatherFromIp.current.temp_f }
}

const weatherFromIp = await IP.getWeather();

export {
  getWeatherFromCity,
  IP
};
