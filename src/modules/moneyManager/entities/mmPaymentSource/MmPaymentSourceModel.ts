import { IStorage, storage } from "../../../../libs/storage";
import { MobXRepository } from "../../../../repository/MobXRepository";
import { IMmPaymentSource } from "./IMmPaymentSource";

export interface IMmPaymentSourceModel {
    mmPaymentSources: IMmPaymentSource[] | null;
    clear: () => void;
}

class MmPaymentSourceModel implements IMmPaymentSourceModel {
    private mmPaymentSourcesRepository = new MobXRepository<IMmPaymentSource[] | null>(null);

    constructor(private storage: IStorage) {
        this.load();
    }

    private load = () => {
        this.storage.get('STORAGE_MM_PAYMENT_SOURCES')
            .then(data => { data && this.mmPaymentSourcesRepository.save(data); })
            .catch(error => console.warn('MmPaymentSourceModel -> load: ', error));
    }

    private persist = (data: IMmPaymentSource[] | null) => {
        if (data) {
            this.storage.set('STORAGE_MM_PAYMENT_SOURCES', data);
        } else {
            this.storage.remove('STORAGE_MM_PAYMENT_SOURCES');
        }
    }

    public get mmPaymentSources() {
        return this.mmPaymentSourcesRepository.data;
    }

    public set mmPaymentSources(value: IMmPaymentSource[] | null) {
        this.mmPaymentSourcesRepository.save(value);
        this.persist(value);
    }

    public clear() {
        this.mmPaymentSources = null;
    }

}

export const mmPaymentSourceModel = new MmPaymentSourceModel(storage);
