import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
    
    render() {
      return (
        <Map google={this.props.google} zoom={17} initialCenter={{
            lat: 43.7933524,
            lng: -79.269
          }}onClick={this.onMapClicked}
          style={{width: '100%', height: '100%', top:'20px', paddingBottom:'200px', align: 'center' }}
          >
            <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 43.7934519, lng: -79.2695333}} />
          <InfoWindow onClose={this.onInfoWindowClose}>
          
          </InfoWindow>
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyClSSTKxG2zkpgWX1xGZSjA81SXqXmSEkU')
  })(MapContainer)