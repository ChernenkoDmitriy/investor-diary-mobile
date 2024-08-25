import { MobXRepository } from "./MobXRepository";

export interface IMobXModel<T> {
    all: T[] | null;
    list: { count: number; rows: T[] } | null;
    current: T | null;
    clear: () => void;
}

export class MobXModel<T> implements IMobXModel<T> {
    private allRepository = new MobXRepository<T[] | null>(null);
    private listRepository = new MobXRepository<{ count: number; rows: T[] } | null>(null);
    private currentRepository = new MobXRepository<T | null>(null);

    get all() {
        return this.allRepository.data;
    }

    set all(data: T[] | null) {
        this.allRepository.save(data);
    }

    get list() {
        return this.listRepository.data;
    }

    set list(data: { count: number; rows: T[] } | null) {
        this.listRepository.save(data);
    }

    get current() {
        return this.currentRepository.data;
    }

    set current(data: T | null) {
        this.currentRepository.save(data);
    }

    clear = () => {
        this.list = null;
        this.current = null;
        this.all = null;
    }

}
