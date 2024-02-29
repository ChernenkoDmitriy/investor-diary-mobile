import { IInvestment } from "../entity/IInvestment";
import { investmentsModel } from "../entity/InvestmentsModel";
import { investmentsService } from "../entity/InvestmentsService";

export const createInvestmentUseCase = async (payload: IInvestment) => {
    try {
        // const { data, isError, message } = await investmentsService.createInvestment(payload);
        // if (!isError) {
        //     investmentsModel.investments = [data, ...investmentsModel.investments || []];
        // }
        // return { isError, message };
        const graterId = Math.max(...(investmentsModel.investments || []).map(i => i.id), 0);
        payload.id = graterId + 1;
        investmentsModel.investments = [payload, ...investmentsModel.investments || []];
        return { isError: false, message: '' };
    } catch (error) {
        console.error('createInvestmentUseCase: ', error);
        return { isError: true, message: 'Something went wrong' };
    }
}