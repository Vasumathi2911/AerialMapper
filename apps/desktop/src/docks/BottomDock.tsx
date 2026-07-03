import { useState } from "react";
import "./BottomDock.css";

import Console from "./tabs/Console";
import Tasks from "./tabs/Tasks";
import AI from "./tabs/AI";
import Timeline from "./tabs/Timeline";
import ChunkMonitor from "./tabs/ChunkMonitor";
import Reports from "./tabs/Reports";
import Notifications from "./tabs/Notifications";

export default function BottomDock() {

    const [activeTab, setActiveTab] = useState("Console");

    return (
        <div className="bottom-dock">

            <div className="dock-header">

                <button onClick={() => setActiveTab("Console")}>Console</button>

                <button onClick={() => setActiveTab("Tasks")}>Tasks</button>

                <button onClick={() => setActiveTab("AI")}>AI</button>

                <button onClick={() => setActiveTab("Timeline")}>Timeline</button>

                <button onClick={() => setActiveTab("Chunk")}>Chunk</button>

                <button onClick={() => setActiveTab("Reports")}>Reports</button>

                <button onClick={() => setActiveTab("Notifications")}>Notifications</button>

            </div>

            <div className="dock-body">

                {activeTab === "Console" && <Console />}

                {activeTab === "Tasks" && <Tasks />}

                {activeTab === "AI" && <AI />}

                {activeTab === "Timeline" && <Timeline />}

                {activeTab === "Chunk" && <ChunkMonitor />}

                {activeTab === "Reports" && <Reports />}

                {activeTab === "Notifications" && <Notifications />}

            </div>

        </div>
    );
}