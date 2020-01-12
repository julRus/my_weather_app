import React from "react";
import * as api from "../api";

export default class LocationChanger extends React.Component {
  state = {
    location: "",
    keepLocation: "",
    locationData: {}
  };

  render() {
    const { location } = this.state;
    return (
      <>
        <form
          className="locationChanger"
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <label>
            <input
              id="locationInput"
              type="text"
              value={location}
              onChange={e => {
                this.handleChange(e);
              }}
              placeholder="Enter location"
              required
            />
          </label>
          <button>Get Weather</button>
        </form>
      </>
    );
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ location: value });
  }

  handleSubmit(e) {
    const { location } = this.state;
    e.preventDefault();
    this.getLocationInformation(location);
    this.setState({ location: "" });
  }

  getLocationInformation(location) {
    const { apiGetWeather } = this.props;
    api.fetchLocationInformation(location).then(data => {
      this.setState({ locationData: data });
      const { Key, LocalizedName } = this.state.locationData;
      apiGetWeather(Key, LocalizedName);
    });
  }
}
