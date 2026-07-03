import TaskStore from "../store/TaskStore";
import EventBus from "../events/EventBus";
import { Events } from "../events/EventTypes";
import type { Task } from "../types/Task";

class TaskManager {

    createTask(task: Task) {

        TaskStore.addTask(task);

        EventBus.publish(Events.TaskCreated, task);

    }

    updateTask(id: string, updates: Partial<Task>) {

        TaskStore.updateTask(id, updates);

        EventBus.publish(Events.TaskUpdated, { id, updates });

    }

    cancelTask(id: string) {

        TaskStore.updateTask(id, {

            status: "Cancelled"

        });

        EventBus.publish(Events.TaskCancelled, id);

    }

    getTasks() {

        return TaskStore.getTasks();

    }

}

export default new TaskManager();