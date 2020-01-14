export const fetchWeather = () => {
  return dispatch => {
    return fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
    )
      .then(response => response.json())
      .then(payload => dispatch({ type: "FETCH_WEATHER", payload }));
  };
};
