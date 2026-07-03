type EventHandler = (data?: unknown) => void;

class EventBus {

    private listeners = new Map<string, EventHandler[]>();

    subscribe(event: string, handler: EventHandler) {

        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }

        this.listeners.get(event)?.push(handler);

    }

    unsubscribe(event: string, handler: EventHandler) {

        const handlers = this.listeners.get(event);

        if (!handlers) return;

        this.listeners.set(
            event,
            handlers.filter(h => h !== handler)
        );

    }

    publish(event: string, data?: unknown) {

        const handlers = this.listeners.get(event);

        if (!handlers) return;

        handlers.forEach(handler => handler(data));

    }

}

export default new EventBus();