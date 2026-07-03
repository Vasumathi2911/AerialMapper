import type { Project } from "../types/Project";

class ProjectStore {

    private currentProject: Project | null = null;

    getCurrentProject() {

        return this.currentProject;

    }

    setCurrentProject(project: Project) {

        this.currentProject = project;

    }

    clearProject() {

        this.currentProject = null;

    }

}

export default new ProjectStore();