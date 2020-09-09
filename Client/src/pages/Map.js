import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import mapStyle from '../utils/demo/mapStyle'


const key = 'AIzaSyCpiGXR94bRQX4VIcQtHf9s2U-CiZk1qqA'
const state = {
    center: { lat: 31.23, lng: 121.47 },
    zoom: 11
};

function Map() {
    return (
        <GoogleMap
            defaultCenter={state.center}
            defaultZoom={state.zoom}
            defaultOptions={{ styles: mapStyle }}

        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default function WrapMap() {
    return (
        <div>
            <WrappedMap googleMapURL={`
            https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div className='h-screen-2' />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}