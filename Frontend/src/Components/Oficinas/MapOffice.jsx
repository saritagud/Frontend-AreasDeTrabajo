import { useEffect } from 'react';

function MapOffice({ lat, lng }) {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat, lng },
      zoom: 15,
    });

    new window.google.maps.Marker({
      position: { lat, lng },
      map,
    });
  }, [lat, lng]);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
}

export default MapOffice;
