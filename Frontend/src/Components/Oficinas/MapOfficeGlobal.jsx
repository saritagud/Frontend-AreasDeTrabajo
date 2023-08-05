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
              scaledSize: new window.google.maps.Size(25, 25),
            },
          });
        });
      }

      let currentInfoWindow = null; // referencia a la ventana de info abierta actualmente

      offices.forEach(office => {
        const marker = new window.google.maps.Marker({
          position: { lat: office.ubicacion.latitud, lng: office.ubicacion.longitud },
          map,
          icon: {
            url: 'https://cdn-icons-png.flaticon.com/512/10083/10083775.png',
            scaledSize: new window.google.maps.Size(25, 25),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="max-width: 300px;">
              <h2 style="font-size: 18px; font-weight: bold;">${office.titulo}</h2>
              <p>${office.descripcion}</p>
              <p>Precio por día: ${office.precioDia}</p>
              <button
                onclick="window.location.href='http://localhost:5173/office/${office._id}'"
                style="
                  background-color: #4CAF50;
                  color: white;
                  padding: 8px 16px;
                  border: none;
                  border-radius: 4px;
                  cursor:pointer;
                "
              >
                Ver más
              </button>
            </div>
          `,
        });

        marker.addListener('click', () => {
          if (currentInfoWindow) {
            currentInfoWindow.close(); // cerramos la ventana de info abierta actualmente
          }
          infoWindow.open(map, marker);
          currentInfoWindow = infoWindow; // actualizamos la referencia a la ventana de info abierta actualmente
        });
      });
    }
  }, [offices]);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
}

export default MapOfficeGlobal;
