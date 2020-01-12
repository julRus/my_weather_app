import React from "react";
import "./App.css";
import * as api from "./api";
// import LocationChanger from "./components/LocationChanger";
import WeatherCard from "./Components/WeatherCard";
import LocationChanger from "./Components/LocationChanger";

class App extends React.Component {
  state = {
    weather: {},
    LocalizedName: "Manchester"
  };
  render() {
    const { weather, LocalizedName } = this.state;
    return (
      <div className="App">
        <header>{/* <h1 className="header">My Weather</h1> */}</header>
        <main>
          {/* <div>
            <LocationChanger fetchWeather={this.getWeather} />
          </div> */}
          <LocationChanger apiGetWeather={this.getWeather} />
          {/* <p>{LocalizedName ? LocalizedName : "Manchester"}</p> */}
          <p className="headline">
            {weather.Headline && weather.Headline.Text}
          </p>
          <ul className="fiveDayForecast">
            {/* <h2 className="location">{location ? location : "Manchester"}</h2> */}
            <WeatherCard weather={weather} location={LocalizedName} />
          </ul>
        </main>
      </div>
    );
  }

  componentDidMount() {
    this.getWeather();
    // api.threeDayWeather();
  }

  getWeather = (locationKey, LocalizedName) => {
    api.fetchWeather(locationKey).then(data => {
      this.setState({ weather: data, LocalizedName: LocalizedName });
    });
  };
}

// console.log(props.weather.DailyForecasts[0].Day.IconPhrase);

export default App;
