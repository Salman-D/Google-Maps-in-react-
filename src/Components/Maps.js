import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 25.395969,//https://www.latlong.net/ iise huhm apne contry la layidute or longgitude pta krte hai 
      lng: 68.357773
    },
    zoom: 11
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC54GSMtcFME_xIkFaKlZnvBAX9iBJzIvE"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={25.395969}
            lng={68.357773}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;