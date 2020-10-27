import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './components/FlatList';
import Marker from './components/Marker';
import flats from './flat';




class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedFlat: flats[0],
      flats
    }
  }

  
  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }
  
  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }
  
  render(){
    const{
      flats,
      selectedFlat
    }=this.state;
    return (
      <div>
        <FlatList
          flats={flats}
          selectedFlat={selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
