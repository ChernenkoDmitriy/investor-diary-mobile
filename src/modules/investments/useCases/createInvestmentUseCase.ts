import { IInvestment } from "../entity/IInvestment";
import { investmentsModel } from "../entity/InvestmentsModel";
import { investmentsService } from "../entity/InvestmentsService";

export const createInvestmentUseCase = async (payload: IInvestment) => {
    try {
        const { data, isError, message } = await investmentsService.create(payload);
        if (!isError) {
            investmentsModel.investments = [data, ...investmentsModel.investments || []];
        }
        return { isError, message };
    } catch (error) {
        console.error('createInvestmentUseCase: ', error);
        return { isError: true, message: 'Something went wrong' };
    }
}