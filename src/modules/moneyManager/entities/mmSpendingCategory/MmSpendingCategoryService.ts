import { ILinks, links } from "../../../../Links";
import { IRequester, requester } from "../../../../libs/requester";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
import { IMmSpendingCategory } from "./IMmSpendingCategory";

class MmSpendingCategoryService {
    constructor(
        private requester: IRequester,
        private links: ILinks,
    ) { }

    get = async (): Promise<IResponse<IMmSpendingCategory[]>> => {
        try {
            const response = await this.requester.get(this.links.mmSpendingCategories);
            return response;
        } catch (error) {
            console.warn('MmSpendingCategoryService -> get: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

}

export const mmSpendingCategoryService = new MmSpendingCategoryService(requester, links);
