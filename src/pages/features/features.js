import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Features() {
  const [weather, setWeather] = useState({
    city: "Hà Nội, Việt Nam",
    temp: 10,
    humd: 50,
    press: 1000,
    wind: 25,
    desc: "Hôm nay trời nắng",
    icon: "10d",
  });
  function getWeather() {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=Halong&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    fetch(url)
      .then((rs) => rs.json())
      .then((rs) => {
        const data = {
          city: rs.name,
          temp: rs.main.temp,
          humd: rs.main.humidity,
          press: rs.main.pressure,
          wind: rs.wind.speed,
          desc: rs.weather[0].description,
          icon: rs.weather[0].icon,
        };
        setWeather(data);
      });
  }
  useEffect(() => {
    getWeather();
  }, []);

  function getCity(e) {
    const v = e.target.value;
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+v+"&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
        fetch(url).then(rs=>rs.json())
        .then(rs=>{
            const data = {
                city: rs.name,
                temp: rs.main.temp,
                humd: rs.main.humidity,
                press: rs.main.pressure,
                wind: rs.wind.speed,
                desc: rs.weather[0].description,
                icon: rs.weather[0].icon
        };
        setWeather(data);
      });
  }
  return (
    <section>
    
    <Container>
                <select onChange={getCity} name="city" className="form-control">
                    <option value="Hanoi">Hà Nội</option>
                    <option value="Saigon">Hồ Chí Minh</option>
                    <option value="Haiphong">Hải Phòng</option>
                    <option value="Hai duong">Hải Dương</option>
                    <option value="Ha long">Hạ Long</option>
                </select>
            </Container>
      <div className="container">
        <h1>Features page.....</h1>
        <h1>{weather.city}</h1>
        <h2>
          Nhiệt độ: {weather.temp} <sup>o</sup>C
        </h2>
        <h3>Độ ẩm: {weather.humd}%</h3>
        <h3>Áp suất: {weather.press}</h3>
        <h3>Tốc độ gió: {weather.wind}km/h</h3>
        <p>{weather.desc}</p>
        <p>
          <img
            src={
              "https://openweathermap.org/img/wn/" + weather.icon + "@2x.png"
            }
          />
        </p>
      </div>
    </section>
  );
}
