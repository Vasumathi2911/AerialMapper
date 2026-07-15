import type { ProcessingJob } from "../models/ProcessingJob";

type Listener = (jobs: ProcessingJob[]) => void;

class ProcessingQueue {

    private jobs: ProcessingJob[] = [];

    private listeners: Listener[] = [];

    getJobs(): ProcessingJob[] {

        return this.jobs;

    }

    addJob(job: ProcessingJob): void {

        this.jobs.push(job);

        this.notify();

    }

    updateJob(job: ProcessingJob): void {

        const index = this.jobs.findIndex(

            j => j.id === job.id

        );

        if (index !== -1) {

            this.jobs[index] = job;

            this.notify();

        }

    }

    removeJob(jobId: string): void {

        this.jobs = this.jobs.filter(

            job => job.id !== jobId

        );

        this.notify();

    }

    clear(): void {

        this.jobs = [];

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

            listener => listener(this.jobs)

        );

    }

}

export default new ProcessingQueue();