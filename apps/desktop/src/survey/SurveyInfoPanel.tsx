import CameraPositionStore from "../store/CameraPositionStore";

import SurveyController from "./SurveyController";

import { useEffect, useState } from "react";

export default function SurveyInfoPanel() {

    const [statistics, setStatistics] = useState(

        SurveyController.getMissionStatistics()

    );

    useEffect(() => {

        function handleChanged(

        ) {

            setStatistics(

                SurveyController.getMissionStatistics()

            );

        }

        CameraPositionStore.subscribe(handleChanged);

        return () => {

            CameraPositionStore.unsubscribe(handleChanged);

        };

    }, []);

    return (

        <div className="survey-info">

            <h2>Mission Statistics</h2>

            <p>Images : {statistics.imageCount}</p>

            <p>GPS Images : {statistics.gpsCount}</p>

            <p>
                Average Altitude :
                {" "}
                {statistics.averageAltitude.toFixed(2)} m
            </p>

            <p>
                Min Altitude :
                {" "}
                {statistics.minAltitude.toFixed(2)} m
            </p>

            <p>
                Max Altitude :
                {" "}
                {statistics.maxAltitude.toFixed(2)} m
            </p>

            <hr />

            <p>
                Latitude :
                {" "}
                {statistics.centerLatitude.toFixed(6)}
            </p>

            <p>
                Longitude :
                {" "}
                {statistics.centerLongitude.toFixed(6)}
            </p>

        </div>

    );

}