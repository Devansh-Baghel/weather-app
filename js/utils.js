const getWeatherFromCity = async (city) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=48df9710e82d465da64214434232006&q=${city}&days=3`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
};

const IP = {
  getIp: async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/ip.json?key=48df9710e82d465da64214434232006&q=auto:ip`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data.ip;
  },

  getWeather: async () => {
    const ip = await IP.getIp();
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=48df9710e82d465da64214434232006&q=${ip}&days=3`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  }
};

const weatherFromIp = await IP.getWeather();

export { getWeatherFromCity, IP };
