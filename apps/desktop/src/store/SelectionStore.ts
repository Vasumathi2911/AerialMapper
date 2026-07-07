import type { Selection } from "../types/Selection";

type SelectionListener = (

    selection: Selection | null

) => void;

class SelectionStore {

    private selection: Selection | null = null;

    private listeners: SelectionListener[] = [];

    getSelection() {

        return this.selection;

    }

    setSelection(

        selection: Selection

    ) {

        this.selection = selection;

        this.notify();

    }

    clear() {

        this.selection = null;

        this.notify();

    }

    subscribe(

        listener: SelectionListener

    ) {

        this.listeners.push(listener);

    }

    unsubscribe(

        listener: SelectionListener

    ) {

        this.listeners = this.listeners.filter(

            l => l !== listener

        );

    }

    private notify() {

        this.listeners.forEach(

            listener => listener(this.selection)

        );

    }

}

export default new SelectionStore();