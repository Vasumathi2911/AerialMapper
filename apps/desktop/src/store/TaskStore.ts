import type { Task } from "../types/Task";

class TaskStore {

    private tasks: Task[] = [];

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    updateTask(id: string, updates: Partial<Task>) {

        const task = this.tasks.find(t => t.id === id);

        if (task) {
            Object.assign(task, updates);
        }

    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }

}

export default new TaskStore();