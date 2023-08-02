import React, { memo, useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function MapGoogle({ state, setState, ubicacion }) {
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik",
    });

    if (!isLoaded) return <p>Cargando...</p>
    return <Map state={state} setState={setState}  ubicacion={ubicacion}/>
}

function Map({ state, setState, ubicacion}) {
    const center = useMemo(() => (ubicacion ? {lat: parseInt(state['ubicacion[latitud]']), lng: parseInt(state['ubicacion[longitud]'])} : {lat: 40, lng: -80}), [])

    return <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="w-full h-[400px]"
    >
        <MarkerF draggable={true} onDragEnd={(e) => {
            setState({
                ...state,
                ["ubicacion[latitud]"]: e.latLng.lat().toString(),
                ["ubicacion[longitud]"]: e.latLng.lng().toString(),
            });
        }} position={center}/>
    </GoogleMap>
}