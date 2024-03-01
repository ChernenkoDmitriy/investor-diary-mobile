import { IInvestment } from "../entity/IInvestment";
import { investmentsModel } from "../entity/InvestmentsModel";
import { investmentsService } from "../entity/InvestmentsService";

export const updateInvestmentUseCase = async (payload: IInvestment) => {
    try {
        const { data, isError, message } = await investmentsService.update(payload.id, payload);
        if (!isError) {
            investmentsModel.investments = investmentsModel.investments?.map(item => item.id === payload.id ? data : item) || [];
        }
        return { isError, message };
    } catch (error) {
        console.error('createInvestmentUseCase: ', error);
        return { isError: true, message: 'Something went wrong' };
    }
}