const getWeatherFromCity = async (city) => {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=48df9710e82d465da64214434232006&q=${city}`,
    {
      mode: "cors",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });
};

// getWeatherFromCity("New Delhi");

const getWeatherFromIp = async () => {
  fetch(
    `http://api.weatherapi.com/v1/ip.json?key=48df9710e82d465da64214434232006&q=auto:ip`,
    {
      mode: "cors",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });
};

getWeatherFromIp();
