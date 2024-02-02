import React, { useEffect, useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  async function getWeather() {
    //const city = document.querySelector("#searchCity").value;
    //setCity(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=15e2cbc645b7a28722017cf8ecf7d0c8`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setData(data);
  }

  return (
    <div className="container">
      <div className="search-city">
        <input
          id="searchCity"
          placeholder="search"
          onChange={(e) => setCity(e.target.value)}
          onClick={() => getWeather()}
        />
      </div>
      <div className="temp">
        {data?.main?.temp}
        <sup>o</sup>C
      </div>
      <div className="city">{data?.name}</div>
      <div className="humidity-wind">
        <div className="humidity">
          <div>{data?.main?.humidity}%</div>
          <div>Humidity</div>
        </div>
        <div className="wind">
          <div>{data?.wind?.speed} km/h</div>
          <div>Wind Speed</div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
