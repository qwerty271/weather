import {
  SET_PRELOADER,
  GET_DATA_WEATHER,
  FETCH_ERROR,
  FETCH_SUCCESSFULY,
  WEATHER_VISIBILITY,
} from "./types";
import axios from "axios";

export const weatherForecast = (city: string) => {
  return (
    dispatch: (arg0: { type?: string; payload?: any; error?: boolean }) => void
  ) => {
    dispatch(successfully());
    dispatch(preloader(true));

    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=9b2d23e001b4416f900151137212909&days=1&aqi=no&alerts=no&lang=ru&q=${city}`
      )
      .then((res) => {
        dispatch(successfully());
        dispatch(getWeather(res.data));
        dispatch(setVisibility(true));
        dispatch(preloader(false));
      })
      .catch((err) => {
        dispatch(setVisibility(false));
        dispatch(error());
        dispatch(preloader(false));
        console.log(err);
      });
  };
};

const preloader = (arg: boolean) => ({
  type: SET_PRELOADER,
  preloader: arg,
});

const successfully = () => ({
  type: FETCH_SUCCESSFULY,
  error: false,
});

const error = () => ({
  type: FETCH_ERROR,
  error: true,
});

const setVisibility = (arg: boolean) => ({
  type: WEATHER_VISIBILITY,
  visibility: arg,
});

const getWeather = (data: any) => ({
  type: GET_DATA_WEATHER,
  payload: {
    ...data,
  },
});
