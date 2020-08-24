import L from "leaflet";
import Head from "next/head";
import React from "react";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet-universal";
L.Icon.Default.imagePath = "/images/Map/";
const position = [35.64961, 51.166359];
export const ContactMap: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        />
      </Head>

      <div className="map-wrapper">
        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    </React.Fragment>
  );
};

export default ContactMap;
