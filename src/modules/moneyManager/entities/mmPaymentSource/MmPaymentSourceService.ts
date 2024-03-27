import { ILinks, links } from "../../../../Links";
import { IRequester, requester } from "../../../../libs/requester";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
import { IMmPaymentSource } from "./IMmPaymentSource";

class MmPaymentSourceService {
    constructor(
        private requester: IRequester,
        private links: ILinks,
    ) { }

    get = async (): Promise<IResponse<IMmPaymentSource[]>> => {
        try {
            const response = await this.requester.get(this.links.mmPaymentSources);
            return response;
        } catch (error) {
            console.warn('MmPaymentSourceService -> get: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

}

export const mmPaymentSourceService = new MmPaymentSourceService(requester, links);
