const getWeatherFromCity = async (city) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=48df9710e82d465da64214434232006&q=${city}`, { mode: "cors" })
  const data = await response.json();
  return data;
};


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
    const rainMm = WEATHER.current.precip_mm;
    const rainCm = rainMm / 10;
    return rainCm;
  },

  getCity: () => { return WEATHER.location.name },
  getCountry: () => { return WEATHER.location.country },
  getCondition: () => { return WEATHER.current.condition.text },
  getHumidity: () => { return WEATHER.current.humidity },
  getWind: () => { return WEATHER.current.wind_kph },
  getTempCelsius: () => { return WEATHER.current.temp_c },
  getTempFahrenheit: () => { return WEATHER.current.temp_f }
}

const WEATHER = await IP.getWeather();

// city, country, date, temp, rainfall, wind, humidity, next 7 days temp

export {
  getWeatherFromCity,
  IP
};
