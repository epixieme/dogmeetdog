import { Loader } from "@shared";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function Nearby() {
  const [coords, setCoords] = useState<LatLngExpression | null>(null);
  // Function to convert a postcode to coordinates using OpenStreetMap's Nominatim API
  async function getCoordinatesFromPostcode(postcode: string | number) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      postcode
    )}&addressdetails=1`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          const location = data[0];
          const lat = +location.lat; // Convert to number
          const lon = +location.lon; // Convert to number
          return [lat, lon] as LatLngExpression;
        } else {
          console.error("No coordinates found for the given postcode.");
        }
      } else {
        console.error(
          "Error fetching data from Nominatim:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("An error occurred while fetching coordinates:", error);
    }
  }

  useEffect(() => {
    getCoordinatesFromPostcode("W3 9NF").then((result) => {
      if (result) {
        setCoords(result);
      }
    });
  }, []);

  if (!coords) {
    return <Loader loading={"... Loading Map"} />; // Render a loading message while fetching
  }

  // set this to your location that you enter when you sign up

  return (
    <MapContainer
      center={coords}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: 400, width: 400 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
