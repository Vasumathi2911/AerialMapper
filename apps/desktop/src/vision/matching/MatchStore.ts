import type { FeatureMatch } from "./FeatureMatch";

type Listener = () => void;

class MatchStore {

    private matches: FeatureMatch[] = [];

    private listeners: Listener[] = [];

    getMatches(): FeatureMatch[] {

        return this.matches;

    }

    addMatches(matches: FeatureMatch[]): void {

        this.matches.push(...matches);

        this.notify();

    }

    clear(): void {

        this.matches = [];

        this.notify();

    }

    subscribe(listener: Listener): void {

        this.listeners.push(listener);

    }

    unsubscribe(listener: Listener): void {

        this.listeners = this.listeners.filter(

            l => l !== listener

        );

    }

    private notify(): void {

        this.listeners.forEach(

            listener => listener()

        );

    }

}

export default new MatchStore();