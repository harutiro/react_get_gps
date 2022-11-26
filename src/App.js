import logo from './logo.svg';
import './App.css';
import React from 'react';

//BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Form , FormControl , Nav , Navbar , NavDropdown } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {latitude: 0.0, longitude: 0.0};

    //関数自体にこのクラスが継承されていないため、thisが使えないので、bindでthisを指定する。
    //https://tech-it.r-net.info/program/javascript/245/
    this.successCallback = this.successCallback.bind(this);
  }


  headClick() {
    //ボタンが押された時に、位置情報を取得する。
    //サクセスコールバック、要するに、成功したときの関数と、エラーコールバック、要するに、失敗したときの関数を指定する。
    navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback);
  }

  //成功したときの関数
  successCallback(position){
    //緯度・緯度を取得
    const getLatitude = position.coords.latitude;
    const getLongitude = position.coords.longitude;

    console.log(getLatitude);
    console.log(getLongitude);

    //緯度・緯度をセット
    this.setState({latitude: getLatitude, longitude: getLongitude});
  }

  //失敗したときの関数
  errorCallback(error){
    alert("位置情報が取得できませんでした");
  }

  //表示するHTML
  render() {
    return (
      <div>
        <h1>latitude</h1>
        <h3>{this.state.latitude}</h3>
        <h1>longitude</h1>
        <h3>{this.state.longitude}</h3>
        {/* <button onClick={() => this.headClick()}>getGPS!!</button> */}
        <button class="btn btn-outline-secondary" onClick={() => this.headClick()} >getGPS!!</button>
        {/* <Button variant="outline-secondary" onClick={() => this.headClick()}>getGPS!!</Button> */}
      </div>
    );
  }
}

export default App;
