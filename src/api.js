import axios from "axios";

export const fetchWeather = (locationKey = "329260") => {
  return axios
    .get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=GTD2yGJLAr3FiNXOIxyMQZ00aODrfVkW&language=en-us&details=false&metric=false`
    )
    .then(({ data }) => {
      console.log(data);

      return data;
    });
};

export const fetchLocationInformation = location => {
  return axios
    .get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=GTD2yGJLAr3FiNXOIxyMQZ00aODrfVkW&q=${location}&language=en-us&details=false`
    )
    .then(({ data }) => {
      return data[0];
    });
};
