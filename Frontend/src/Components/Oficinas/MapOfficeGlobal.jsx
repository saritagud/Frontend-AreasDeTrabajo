import { useEffect } from 'react';

function MapOfficeGlobal({ offices }) {

  useEffect(() => {
    if (offices.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      offices.forEach(office => {
        bounds.extend(new window.google.maps.LatLng(office.ubicacion.latitud, office.ubicacion.longitud));
      });
  
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: bounds.getCenter(),
        zoom: 15,
      });
      map.fitBounds(bounds);
  
      offices.forEach(office => {
        new window.google.maps.Marker({
          position: { lat: office.ubicacion.latitud, lng: office.ubicacion.longitud },
          map,
        });
      });
    }
  }, [offices]);
  

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
}

export default MapOfficeGlobal;

