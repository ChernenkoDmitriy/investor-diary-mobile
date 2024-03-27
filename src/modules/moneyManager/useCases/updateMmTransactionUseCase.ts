import { mmTransactionModel } from "../entities/mmTransaction/MmTransactionModel";
import { mmTransactionService } from "../entities/mmTransaction/MmTransactionService";
import { IUpdateMmTransaction } from "../entities/mmTransaction/dto/update-mm-transaction";

export const updateMmTransactionUseCase = async (id: number, body: IUpdateMmTransaction) => {
    try {
        const { data, isError, message } = await mmTransactionService.update(id, body);
        if (!isError) {
            const nextTransactions = mmTransactionModel.mmTransactions?.map((transaction) => {
                return transaction.id === id ? data : transaction;
            }) || [];
            mmTransactionModel.mmTransactions = nextTransactions;
        }
        return { isError, message, data };
    } catch (error) {
        console.error('updateMmTransactionUseCase: ', error);
        return { isError: true, data: null, message: 'Something went wrong' };
    }
}
