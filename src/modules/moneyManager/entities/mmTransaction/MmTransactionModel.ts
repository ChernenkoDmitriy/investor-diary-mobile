import { MobXRepository } from "../../../../repository/MobXRepository";
import { IMmTransaction } from "./IMmTransaction";

export interface IMmTransactionModel {
    mmTransactions: IMmTransaction[] | null;
    clear: () => void;
}

class MmTransactionModel implements IMmTransactionModel {
    private mmTransactionsRepository = new MobXRepository<IMmTransaction[] | null>(null);

    public get mmTransactions() {
        return this.mmTransactionsRepository.data;
    }

    public set mmTransactions(value: IMmTransaction[] | null) {
        this.mmTransactionsRepository.save(value);
    }

    public clear() {
        this.mmTransactions = null;
    }

}

export const mmTransactionModel = new MmTransactionModel();
