import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

var placeholder = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.0/dist/images/marker-icon.png",
  // iconSize:     [47, 47], // size of the icon
  // iconAnchor:   [47, 47], // point of the icon which will correspond to marker's location
  // popupAnchor:  [-25, -50], // point from which the popup should open relative to the iconAnchor
  // tooltipAnchor:[30, -2]
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
