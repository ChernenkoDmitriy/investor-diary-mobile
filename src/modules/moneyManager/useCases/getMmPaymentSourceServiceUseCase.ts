import { mmPaymentSourceModel } from "../entities/mmPaymentSource/MmPaymentSourceModel";
import { mmPaymentSourceService } from "../entities/mmPaymentSource/MmPaymentSourceService";

export const getMmPaymentSourceServiceUseCase = async () => {
    try {
        const { data, isError, message } = await mmPaymentSourceService.get();
        if (!isError) {
            mmPaymentSourceModel.mmPaymentSources = data;
        }
        return { isError, message };
    } catch (error) {
        console.error('getMmTransactionsUseCase: ', error);
        return { isError: true, data: null, message: 'Something went wrong' };
    }
}