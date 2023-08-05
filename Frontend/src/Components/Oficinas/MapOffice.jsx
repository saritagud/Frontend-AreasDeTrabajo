import { useEffect } from 'react';

function MapOffice({ lat, lng, titulo, descripcion, imagenReferencia, direccion, precioDia }) {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat, lng },
      zoom: 15,
    });

    const marker = new window.google.maps.Marker({
      position: { lat, lng },
      map,
      icon: {
        url: 'https://cdn-icons-png.flaticon.com/512/10083/10083775.png',
        scaledSize: new window.google.maps.Size(40, 40),
      },
    });

    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="max-width: 300px;">
          <img src="${imagenReferencia}" style="width: 100%; height: auto;" />
          <h2 style="font-size: 18px; font-weight: bold;">${titulo}</h2>
          <p>${descripcion}</p>
          <p><strong>Dirección:</strong> ${direccion}</p>
          <p style="font-weight: bold;"><strong>Precio por día:</strong> ${precioDia}</p>
        </div>
      `,
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    // Agregar marcador para la ubicación actual del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        new window.google.maps.Marker({
          position: userLocation,
          map,
          icon: {
            url: 'https://cdn-icons-png.flaticon.com/512/5097/5097332.png',
            scaledSize: new window.google.maps.Size(40, 40),
          },
        });
      });
    }
  }, [lat, lng, titulo, descripcion, imagenReferencia, direccion, precioDia]);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
}

export default MapOffice;