import { investmentsModel } from "../entity/InvestmentsModel";
import { investmentsService } from "../entity/InvestmentsService";

export const removeInvestmentUseCase = async (payload: number) => {
    try {
        const { isError, message } = await investmentsService.remove(payload);
        if (!isError) {
            investmentsModel.investments = investmentsModel.investments?.filter(item => item.id !== payload) || [];
        }
        return { isError, message };
    } catch (error) {
        console.error('removeInvestmentUseCase: ', error);
        return { isError: true, message: 'Something went wrong' };
    }
}