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

  getCity: async () => {
    const city = await IP.getWeather();
    return city.location.name;
  },

  getCountry: async () => {
    const country = await IP.getWeather();
    return country.location.country;
  },

  getCondition: async () => {
    const condition = await IP.getWeather();
    return condition.current.condition.text;
  },

  getHumidity: async () => {
    const humidity = await IP.getWeather();
    return humidity.current.humidity;
  }
}


// city, country, date, temp, rainfall, wind, humidity, next 7 days temp

export {
  getWeatherFromCity,
  IP
};
