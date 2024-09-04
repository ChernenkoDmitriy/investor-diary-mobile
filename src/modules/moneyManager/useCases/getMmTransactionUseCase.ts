import { mmTransactionModel } from "../entities/mmTransaction/MmTransactionModel";
import { TMmTransactionUsParams, mmTransactionService } from "../entities/mmTransaction/MmTransactionService";

export const getMmTransactionUseCase = async (params?: TMmTransactionUsParams) => {
    try {
        const { data, isError, message } = await mmTransactionService.get(params);
        if (!isError) {
            const nextTransactions = mmTransactionModel.mmTransactions ? mmTransactionModel.mmTransactions : [];
            mmTransactionModel.mmTransactions = [...nextTransactions, ...data.rows];
        }
        return { isError, message, data };
    } catch (error) {
        console.error('getMmTransactionUseCase: ', error);
        return { isError: true, data: null, message: 'Something went wrong' };
    }
}
