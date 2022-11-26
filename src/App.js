import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {latitude: 0.0, longitude: 0.0};
    this.successCallback = this.successCallback.bind(this);
  }


  headClick() {
    // this.setState({ count: this.state.count + 1 });
    navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback);
  }

  successCallback(position){
    const getLatitude = position.coords.latitude;
    const getLongitude = position.coords.longitude;

    console.log(getLatitude);
    console.log(getLongitude);

    this.setState({latitude: getLatitude, longitude: getLongitude});
  }

  errorCallback(error){
    alert("位置情報が取得できませんでした");
  }

  render() {
    return (
      <div>
        <h1>latitude</h1>
        <h3>{this.state.latitude}</h3>
        <h1>longitude</h1>
        <h3>{this.state.longitude}</h3>
        <button onClick={() => this.headClick()}>getGPS!!</button>
      </div>
    );
  }
}

export default App;
