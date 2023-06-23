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

export { getWeatherFromIp, getWeatherFromCity };
