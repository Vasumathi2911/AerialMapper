import type { Mission } from "../types/Mission";

import MissionStore from "../store/MissionStore";

class MissionController {

    getMission(): Mission | null {

        return MissionStore.getMission();

    }

    hasMission(): boolean {

        return MissionStore.getMission() !== null;

    }

}

export default new MissionController();