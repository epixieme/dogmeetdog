import { Loader } from "@shared";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "../styles/nearby.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/types";
import { setPostcode } from "features/Nearby/state/postcodeSlice";
import MapScroll from "features/Nearby/state/components/MapScroll";
import CustomMarker from "features/Nearby/state/components/CustomMarker";

const markers = [
  { position: [51.6057, -0.1], name: "Marker 1" },
  { position: [51.6056, -0.2], name: "Marker 2" },
  // Add more markers as needed
];

// [51.60572, -0.0087899]

export default function Nearby() {
  const dispatch = useDispatch();
  const postcode = useSelector((state: RootState) => state.postcode);
  const [coords, setCoords] = useState<LatLngExpression | null>(null);

  console.log(coords);

  console.log(postcode.postcode);
  // Function to convert a postcode to coordinates using OpenStreetMap's Nominatim API
  async function getCoordinatesFromPostcode(postcode: string) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(postcode)}&addressdetails=1`;

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
        console.error("Error fetching data from Nominatim API:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while fetching coordinates:", error);
    }
  }
  async function updateCoordinates(postcodeValue: string | null) {
    if (postcodeValue) {
      const result = await getCoordinatesFromPostcode(postcodeValue);
      if (result) {
        setCoords(result);
      }
    }
  }

  async function handlePostCode(value: string) {
    dispatch(setPostcode(value));
  }

  // Fetch coordinates when postcode changes
  useEffect(() => {
    updateCoordinates(postcode.postcode);
  }, [postcode.postcode]);

  if (!coords) {
    return <Loader loading={"... Loading Map"} />;
  }

  // set this to your location that you enter when you sign up or on resetting the location to the new one in the input field or on mobile use current location

  return (
    <>
      <form action="">
        <label>Enter your postcode</label>
        <input type="text" value={postcode.postcode} onChange={(event) => handlePostCode(event.target.value)} />
      </form>
      <section className="map-container">
        <MapContainer center={coords} zoom={13} scrollWheelZoom={false} style={{ height: 400, width: 400 }}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* <MapScroll center={coords} /> */}
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position as LatLngExpression}>
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
          <CustomMarker coords={coords} />
        </MapContainer>
      </section>
    </>
  );
}
