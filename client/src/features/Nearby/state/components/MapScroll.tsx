import { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface MapScrollProps {
  center?: LatLngExpression;
  zoom?: number;
}

// Component to move the map to specific coordinates
const MapScroll = ({ center, zoom }: MapScrollProps) => {
  const map = useMap(); // Get the Leaflet map instance

  useEffect(() => {
    if (center) {
      map.setView(center, zoom); // Move the map to the new center and zoom level
    }
  }, [center, zoom, map]);

  return null; // This component does not render anything visually
};

export default MapScroll;
