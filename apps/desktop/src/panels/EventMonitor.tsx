import { useEffect } from "react";
import EventBus from "../events/EventBus";
import { Events } from "../events/EventTypes";

export default function EventMonitor() {

    useEffect(() => {

        const handler = (data?: unknown) => {

            console.log("Event Received:", data);

        };

        EventBus.subscribe(Events.TaskCreated, handler);

        return () => {

            EventBus.unsubscribe(Events.TaskCreated, handler);

        };

    }, []);

    return null;

}