import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import {useValue} from "../context/ContextProvider"
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Geocoder = () => {
  const { dispatch } = useValue();
  const ctrl = new MapBoxGeocoder({
    accessToken: 'pk.eyJ1IjoiYmlsdHUiLCJhIjoiY2xqaXM0OTZ4MDN4bjNrbWtxYjhvOW1pcCJ9.2RMleSlBqhIMcb6em9Q8cw',
    marker: false,
    collapsed: true,
  });
  useControl(() => ctrl);
  ctrl.on('result', (e) => {
    const coords = e.result.geometry.coordinates;
    dispatch({
      type: 'UPDATE_LOCATION',
      payload: { lng: coords[0], lat: coords[1] },
    });
  });
  return null;
};

export default Geocoder;
