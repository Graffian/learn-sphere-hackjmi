import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Map(props){
const position = [props.latitude, props.longitude];
  return(
      <MapContainer center={position} zoom={13} style={{ height: "40vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Your Location</Popup>
      </Marker>
    </MapContainer>
  )
}
export default Map