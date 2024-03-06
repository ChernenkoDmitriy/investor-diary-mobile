import { IStorage, storage } from "../../libs/storage";
import { MobXRepository } from "../../repository/MobXRepository"
import { IExchangeRate } from "./IExchangeRate";

export interface IExchangeRateModel {
    exchangeRates: IExchangeRate[] | null;
    clear: () => void;
}

class ExchangeRateModel implements IExchangeRateModel {
    private exchangeRatesRepository = new MobXRepository<IExchangeRate[] | null>(null);

    constructor(private storage: IStorage) {
        this.load();
    }

    private load = () => {
        this.storage.get('EXCHANGE_RATES')
            .then(data => { data && this.exchangeRatesRepository.save(data); })
            .catch(error => console.warn('ExchangeRateModel -> load: ', error));
    }

    private persist = (data: IExchangeRate[] | null) => {
        if (data) {
            this.storage.set('EXCHANGE_RATES', data);
        } else {
            this.storage.remove('EXCHANGE_RATES');
        }
    }

    public get exchangeRates() {
        return this.exchangeRatesRepository.data;
    }

    public set exchangeRates(value: IExchangeRate[] | null) {
        this.exchangeRatesRepository.save(value);
        this.persist(value);
    }

    public clear() {
        this.exchangeRates = null;
    }

}

export const exchangeRateModel = new ExchangeRateModel(storage);
