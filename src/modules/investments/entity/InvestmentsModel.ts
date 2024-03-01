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

    public get investments() {
        return this.investmentsRepository.data;
    }

    public set investments(value: IInvestment[] | null) {
        this.investmentsRepository.save(value);
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

export const investmentsModel = new InvestmentsModel();
