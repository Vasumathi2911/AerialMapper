import { useEffect } from "react";
import EventBus from "../events/EventBus";
import { Events } from "../events/EventTypes";

export default function ProcessingConsole() {

    useEffect(() => {

        const onTaskCreated = (data?: unknown) => {
            console.log("Task Created:", data);
        };

        EventBus.subscribe(Events.TaskCreated, onTaskCreated);

        return () => {
            EventBus.unsubscribe(Events.TaskCreated, onTaskCreated);
        };

    }, []);

    return (
        <div className="processing-console">
            <h3>Processing Console</h3>
            <p>No active tasks.</p>
        </div>
    );
}