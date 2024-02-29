import { IStorage, storage } from "../../../libs/storage";
import { MobXRepository } from "../../../repository/MobXRepository";
import { IInvestment } from "./IInvestment";

export interface IInvestmentsModel {
    investments: IInvestment[] | null;
    investment: IInvestment | null;
    clear: () => void;
}

class InvestmentsModel implements IInvestmentsModel {
    private investmentsRepository = new MobXRepository<IInvestment[] | null>(null);
    private investmentRepository = new MobXRepository<IInvestment | null>(null);

    constructor(private storage: IStorage) {
        this.load();
    }

    private load = () => {
        this.storage.get('STORAGE_INVESTMENTS')
            .then(data => { data && this.investmentsRepository.save(data); })
            .catch(error => console.warn('InvestmentsModel -> load: ', error));
    }

    private persist = (data: IInvestment[] | null) => {
        if (data) {
            this.storage.set('STORAGE_INVESTMENTS', data);
        } else {
            this.storage.remove('STORAGE_INVESTMENTS');
        }
    }

    public get investments() {
        return this.investmentsRepository.data;
    }

    public set investments(value: IInvestment[] | null) {
        this.investmentsRepository.save(value);
        this.persist(value);
    }

    public get investment() {
        return this.investmentRepository.data;
    }

    public set investment(value: IInvestment | null) {
        this.investmentRepository.save(value);
    }

    public clear() {
        this.investments = null;
        this.investment = null;
    }

}

export const investmentsModel = new InvestmentsModel(storage);
