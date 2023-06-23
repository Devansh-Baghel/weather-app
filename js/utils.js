const getWeatherFromCity = async (city) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=48df9710e82d465da64214434232006&q=${city}`, { mode: "cors" })
  const data = await response.json();
  return data;
};

const getIp = async () => {
  const response = await fetch(`http://api.weatherapi.com/v1/ip.json?key=48df9710e82d465da64214434232006&q=auto:ip`, { mode: "cors" })
  const data = await response.json();
  return data.ip;
};

const getWeatherFromIp = async () => {
  const ip = await getIp();
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=48df9710e82d465da64214434232006&q=${ip}`, { mode: "cors" })
  const data = await response.json();
  return data;
};

const getCityFromIp = async () => {
  const city = await getWeatherFromIp();
  return city.location.name;
};

const getCountryFromIp = async () => {
  const country = await getWeatherFromIp();
  return country.location.country;
};

const getConditionFromIp = async () => {
  const condition = await getWeatherFromIp();
  return condition.current.condition.text;
};

const getHumidityFromIp = async () => {
  const humidity = await getWeatherFromIp();
  return humidity.current.humidity;
};

// city, country, date, temp, rainfall, wind, humidity, next 7 days temp

export {
  getCityFromIp,
  getCountryFromIp,
  getWeatherFromCity,
  getConditionFromIp,
  getHumidityFromIp
};
