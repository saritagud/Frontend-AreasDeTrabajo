import React, { memo, useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function MapGoogle({ state, setState }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik",
    });

    if (!isLoaded) return <p>Cargando...</p>
    return <Map state={state} setState={setState}/>
}

function Map({ state, setState}) {
    const center = useMemo(() => ({lat: 40, lng: -80}), [])

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