import type { Project } from "../types/Project";

type ProjectListener = (project: Project | null) => void;

class ProjectStore {

    private currentProject: Project | null = null;

    private listeners: ProjectListener[] = [];

    setProject(project: Project) {

        console.log("ProjectStore.setProject()", project);

        this.currentProject = project;

        this.notify();

    }

    getProject(): Project | null {

        return this.currentProject;

    }

    clearProject() {

        this.currentProject = null;

        this.notify();

    }

    hasProject(): boolean {

        return this.currentProject !== null;

    }

    subscribe(listener: ProjectListener) {

        this.listeners.push(listener);

    }

    unsubscribe(listener: ProjectListener) {

        this.listeners = this.listeners.filter(

            l => l !== listener

        );

    }

    private notify() {

        this.listeners.forEach(

            listener => listener(this.currentProject)

        );

    }

}

export default new ProjectStore();