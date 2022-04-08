import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import icon from '../../assets/img/icon-blip.svg'

var placeholder = new L.icon({
  iconUrl: icon,
  iconAnchor:   [25, 60],
  popupAnchor:  [0, -58],
});
class MapComponent extends React.Component {
  state = {
    lat: 59.9684,
    lng: 30.3175,
    zoom: 17,
  };

  render() {
    var center = [this.state.lat, this.state.lng];

    return (
      <MapContainer zoom={this.state.zoom} center={center}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={ placeholder} >
          <Popup>Мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5</Popup>
        </Marker>
      </MapContainer>
    );
  }
};
export default MapComponent;
