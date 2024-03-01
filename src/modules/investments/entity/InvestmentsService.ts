import { ILinks, links } from "../../../Links";
import { IRequester, requester } from "../../../libs/requester";
import { IResponse } from "../../../libs/requester/IRequester/IResponse";
import { IInvestment } from "./IInvestment";

class InvestmentsService {
    constructor(
        private requester: IRequester,
        private links: ILinks,
    ) { }

    create = async (body: IInvestment): Promise<IResponse<IInvestment>> => {
        try {
            const response = await this.requester.post(this.links.investments, body);
            return response;
        } catch (error) {
            console.warn('InvestmentsService -> createInvestment: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    remove = async (id: number): Promise<IResponse<null>> => {
        try {
            const response = await this.requester.delete(this.links.investments + `/${id}`);
            return response;
        } catch (error) {
            console.warn('InvestmentsService -> removeInvestment: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

}

export const investmentsService = new InvestmentsService(requester, links);
