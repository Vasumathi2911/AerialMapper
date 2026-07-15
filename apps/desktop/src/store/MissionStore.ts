import type { Mission } from "../types/Mission";

type Listener = (

    mission: Mission | null

) => void;

class MissionStore {

    private mission: Mission | null = null;

    private listeners: Listener[] = [];

    getMission() {

        return this.mission;

    }

    setMission(

        mission: Mission | null

    ) {

        this.mission = mission;

        this.notify();

    }

    subscribe(

        listener: Listener

    ) {

        this.listeners.push(listener);

    }

    unsubscribe(

        listener: Listener

    ) {

        this.listeners = this.listeners.filter(

            l => l !== listener

        );

    }

    private notify() {

        this.listeners.forEach(

            listener => listener(this.mission)

        );

    }

}

export default new MissionStore();