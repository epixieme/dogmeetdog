import L from "leaflet";
import { Marker, Popup } from "react-leaflet";


const customIcon = new L.Icon({
  iconUrl: "./src/assets/images/location.png", // URL to the icon image
  iconSize: [50, 50], // Size of the icon
  iconAnchor: [12, 41], // Position of the icon anchor
  popupAnchor: [1, -34], // Position of the popup anchor relative to the icon
});

export default function CustomMarker({ coords }: any) {
  return (
    <Marker position={coords} icon={customIcon}>
      <Popup>Your Location.</Popup>
    </Marker>
  );
}

//need to attribute the icon
{
  /* <a href="https://www.flaticon.com/free-icons/marker" title="marker icons">Marker icons created by Freepik - Flaticon</a> */
}
