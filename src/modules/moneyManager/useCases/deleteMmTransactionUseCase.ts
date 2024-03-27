import { mmTransactionModel } from "../entities/mmTransaction/MmTransactionModel";
import { mmTransactionService } from "../entities/mmTransaction/MmTransactionService";

export const deleteMmTransactionUseCase = async (id: number) => {
    try {
        const { data, isError, message } = await mmTransactionService.remove(id);
        if (!isError) {
            const nextTransactions = mmTransactionModel.mmTransactions?.filter((transaction) => transaction.id !== id) || [];
            mmTransactionModel.mmTransactions = nextTransactions;
        }
        return { isError, message, data };
    } catch (error) {
        console.error('getMmTransactionUseCase: ', error);
        return { isError: true, data: null, message: 'Something went wrong' };
    }
}