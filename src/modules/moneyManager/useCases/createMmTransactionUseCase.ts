import { mmTransactionModel } from "../entities/mmTransaction/MmTransactionModel";
import { mmTransactionService } from "../entities/mmTransaction/MmTransactionService";
import { ICreateMmTransaction } from "../entities/mmTransaction/dto/create-mm-transaction";

export const createMmTransactionUseCase = async (body: ICreateMmTransaction) => {
    try {
        const { data, isError, message } = await mmTransactionService.create(body);
        if (!isError) {
            const nextTransactions = mmTransactionModel.mmTransactions ? mmTransactionModel.mmTransactions : [];
            mmTransactionModel.mmTransactions = [data, ...nextTransactions];
        }
        return { isError, message, data };
    } catch (error) {
        console.error('createMmTransactionUseCase: ', error);
        return { isError: true, data: null, message: 'Something went wrong' };
    }
}
