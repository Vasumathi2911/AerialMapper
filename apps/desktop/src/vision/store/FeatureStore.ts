import type { FeaturePoint } from "../models/FeaturePoint";
import type { FeatureDescriptor } from "../models/FeatureDescriptor";

type Listener = () => void;

class FeatureStore {

    private featurePoints: FeaturePoint[] = [];

    private featureDescriptors: FeatureDescriptor[] = [];

    private listeners: Listener[] = [];

    getFeaturePoints(): FeaturePoint[] {

        return this.featurePoints;

    }

    getFeatureDescriptors(): FeatureDescriptor[] {

        return this.featureDescriptors;

    }

    setFeatures(

        points: FeaturePoint[],

        descriptors: FeatureDescriptor[]

    ): void {

        this.featurePoints = points;

        this.featureDescriptors = descriptors;

        this.notify();

    }

    addFeatures(

        points: FeaturePoint[],

        descriptors: FeatureDescriptor[]

    ): void {

        this.featurePoints.push(

            ...points

        );

        this.featureDescriptors.push(

            ...descriptors

        );

        this.notify();

    }

    clear(): void {

        this.featurePoints = [];

        this.featureDescriptors = [];

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

export default new FeatureStore();