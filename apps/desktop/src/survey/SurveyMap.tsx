import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

export default function SurveyMap() {

    return (

        <MapContainer

            center={[20, 78]}

            zoom={5}

            style={{

                width: "100%",

                height: "100%"

            }}

        >

            <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />

        </MapContainer>

    );

}