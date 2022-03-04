import React from "react";
import "./Weather.css";
import Buttons from "../Buttons/Buttons";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { weatherForecast } from "../../redux/actions";
import Preloader from "../Preloader/Preloader";

function Weather(props: {
  data: {
    location?: any;
    current?: any;
    forecast?: any;
    weather?: any;
    error: boolean;
    visibility: boolean;
    preloader: boolean;
  };
}) {
  const dispatch = useDispatch();
  const [request, setRequest] = React.useState("");

  function getWeatherForecast(event: any) {
    event.preventDefault();
    dispatch(weatherForecast(request));
    setRequest("");
    console.log(props.data);
  }

  function handleChange(event: any) {
    setRequest(event.target.value);
  }

  return (
    <div className="weather">
      <h1 className="weather__title">
        <span>П</span>
        <span>р</span>
        <span>о</span>
        <span>г</span>
        <span>н</span>
        <span>о</span>
        <span>з </span>
        <span>п</span>
        <span>о</span>
        <span>г</span>
        <span>о</span>
        <span>д</span>
        <span>ы</span>
      </h1>
      <div className="weather__main">
        <form className="weather__search" onSubmit={getWeatherForecast}>
          <input
            className="weather__input"
            placeholder="Введите город"
            type="text"
            value={request}
            onChange={handleChange}
          ></input>
          <button className="weather__button" type="submit">
            Поиск
          </button>
        </form>
        <p
          className={`weather__error-message ${
            props.data.error ? "weather__error-message_active" : ""
          }`}
        >
          Попробуйте ввести другой город
        </p>
        <Preloader active={props.data.preloader} />
        <div
          className={`weather__container ${
            props.data.visibility ? "" : "weather__container-inactive"
          }`}
        >
          <ul className="weather__list-title">
            <li>
              <p className="weather__location">
                {Object.keys(props.data.weather).length !== 0
                  ? props.data.weather.location.name
                  : ""}
              </p>
            </li>
            <li>
              <p className="weather__condition">
                {Object.keys(props.data.weather).length !== 0
                  ? props.data.weather.current.condition.text
                  : ""}
              </p>
            </li>
          </ul>

          <p></p>
          <p className="weather__container_temperature">
            {Object.keys(props.data.weather).length !== 0
              ? props.data.weather.current.temp_c > 0
                ? "+" + Math.round(props.data.weather.current.temp_c)
                : "" + Math.round(props.data.weather.current.temp_c)
              : ""}
          </p>
          <img
            className="weather__container_icon"
            alt="Погода"
            src={
              Object.keys(props.data.weather).length !== 0
                ? props.data.weather.current.condition.icon
                : ""
            }
          />
          <ul className="weather__list-forecast">
            <li className="weather__list-forecast_item">
              Вероятность осадков:{" "}
              <span className="weather__list-forecast_value">
                {Object.keys(props.data.weather).length !== 0
                  ? props.data.weather.forecast.forecastday[0].hour[
                      new Date().getHours()
                    ].chance_of_rain
                  : ""}
                %
              </span>
            </li>
            <li className="weather__list-forecast_item">
              Влажность:{" "}
              <span className="weather__list-forecast_value">
                {Object.keys(props.data.weather).length !== 0
                  ? props.data.weather.forecast.forecastday[0].day.avghumidity
                  : ""}
                %
              </span>
            </li>
            <li className="weather__list-forecast_item">
              Ветер:{" "}
              <span className="weather__list-forecast_value">
                {Object.keys(props.data.weather).length !== 0
                  ? Math.round(
                      props.data.weather.forecast.forecastday[0].hour[
                        new Date().getHours()
                      ].gust_kph / 3.6
                    )
                  : ""}{" "}
                м/с
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Buttons
        link1="/weather/"
        link2="/weather/time"
        button1="Главная"
        button2="Время"
        color1="3"
        color2="2"
      />
    </div>
  );
}

function mapStateToProps(state: any) {
  return { data: state };
}

export default connect(mapStateToProps)(Weather);
