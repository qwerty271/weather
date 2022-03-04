import {
  SET_PRELOADER,
  GET_DATA_WEATHER,
  FETCH_ERROR,
  FETCH_SUCCESSFULY,
  WEATHER_VISIBILITY,
} from "./types";

const initialState = {
  error: false,
  visibility: false,
  preloader: false,
  weather: {},
};

export function reducer(
  state = initialState,
  action: {
    type: any;
    payload: any;
    error: boolean;
    visibility: boolean;
    preloader: boolean;
  }
) {
  switch (action.type) {
    case SET_PRELOADER:
      return {
        ...state,
        preloader: action.preloader,
      };
    case GET_DATA_WEATHER:
      return { ...state, weather: action.payload };
    case FETCH_ERROR:
      return { ...state, error: action.error };
    case FETCH_SUCCESSFULY:
      return { ...state, error: action.error };
    case WEATHER_VISIBILITY:
      return { ...state, visibility: action.visibility };
    default:
      return state;
  }
}
