import React from "react";
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from "weather-icons-react";

export default function WeatherCard(props) {
  const { DailyForecasts } = props.weather;
  const { location } = props;
  return (
    <>
      {DailyForecasts &&
        DailyForecasts.map(day => {
          console.log(props.weather);

          return (
            <div className="dayForecast">
              <li key={day.EpochDate}>
                <p id="date">{new Date(day.Date).toDateString()}</p>
                <p id="location">{location ? location : "Manchester"}</p>

                {day.Day.HasPrecipitation ? (
                  <p id="description">
                    {day.Day.PrecipitationIntensity} {day.Day.PrecipitationType}
                    <p> {iconHub(day.Day.PrecipitationType)}</p>
                  </p>
                ) : (
                  <p id="description">
                    {day.Day.IconPhrase}
                    <p>{iconHub(day.Day.IconPhrase)}</p>
                  </p>
                )}
                <p id="temperature">
                  {Math.ceil(
                    (((day.Temperature.Maximum.Value - 32) * 5) / 9 +
                      ((day.Temperature.Minimum.Value - 32) * 5) / 9) /
                      2
                  )}
                  °C
                </p>
                <div className="temp">
                  {" "}
                  <p id="maxTemp">
                    {Math.ceil(((day.Temperature.Maximum.Value - 32) * 5) / 9)}
                    °C
                  </p>
                  <p id="minTemp">
                    {Math.ceil(((day.Temperature.Minimum.Value - 32) * 5) / 9)}
                    °C
                  </p>
                </div>
              </li>
            </div>
          );
        })}
    </>
  );
}

function iconHub(weather) {
  if (weather.includes("cloud")) {
    return <WiCloudy size={60} color="#6b6c6d" alt="clouds" className="icon" />;
  } else if (weather.includes("un")) {
    return <WiDaySunny size={60} color="#F6FF33" alt="sun" className="icon" />;
  } else if (weather.includes("Rain")) {
    return <WiRain size={60} alt="rain clouds" className="icon" />;
  } else if (weather.includes("Snow")) {
    return <WiSnow size={60} color="#6b6c6d" alt="snow" className="icon" />;
  } else if (weather.includes("Showers")) {
    return <WiRain size={60} color="#6b6c6d" alt="showers" className="icon" />;
  } else if (weather.includes("Rain and snow")) {
    return <WiRain size={60} alt="rain" className="icon" />;
  }
}
