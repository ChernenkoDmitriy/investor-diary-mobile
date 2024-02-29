import { ILinks, links } from "../../../Links";
import { IRequester, requester } from "../../../libs/requester";
import { IResponse } from "../../../libs/requester/IRequester/IResponse";
import { IInvestment } from "./IInvestment";

class InvestmentsService {
    constructor(
        private requester: IRequester,
        private links: ILinks,
    ) { }

    createInvestment = async (body: IInvestment): Promise<IResponse<IInvestment>> => {
        try {
            const response = await this.requester.post(this.links.investments, body);
            return response;
        } catch (error) {
            console.warn('InvestmentsService -> createInvestment: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    } 

}

export const investmentsService = new InvestmentsService(requester, links);
