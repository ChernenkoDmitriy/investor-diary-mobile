import { investmentsModel } from "../entity/InvestmentsModel";
import { investmentsService } from "../entity/InvestmentsService";

export const getInvestmentsUseCase = async () => {
    try {
        const { data, isError, message } = await investmentsService.list();
        if (!isError) {
            investmentsModel.investments = data;
        }
        return { isError, message };
    } catch (error) {
        console.error('getInvestmentsUseCase: ', error);
        return { isError: true, data: null, message: 'Something went wrong' };
    }
};
