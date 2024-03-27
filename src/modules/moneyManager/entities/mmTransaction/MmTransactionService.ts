import { ILinks, links } from "../../../../Links";
import { IRequester, requester } from "../../../../libs/requester";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
import { IMmTransaction } from "./IMmTransaction";
import { ICreateMmTransaction } from "./dto/create-mm-transaction";
import { IUpdateMmTransaction } from "./dto/update-mm-transaction";

export type TMmTransactionUsParams = {
    limit?: number;
    offset?: number;
    start_date?: string;
    end_date?: string;
};

class MmTransactionService {
    constructor(
        private requester: IRequester,
        private links: ILinks,
    ) { }

    get = async (params?: TMmTransactionUsParams): Promise<IResponse<{ count: number; rows: IMmTransaction[] }>> => {
        try {
            const url = new URL(this.links.mmTransactions);
            if (params?.limit) url.searchParams.append('limit', params.limit.toString());
            if (params?.offset) url.searchParams.append('offset', params.offset.toString());
            if (params?.start_date) url.searchParams.append('start_date', params.start_date);
            if (params?.end_date) url.searchParams.append('end_date', params.end_date);
            const response = await this.requester.get(url.toString());
            return response;
        } catch (error) {
            console.warn('MmSpendingCategoryService -> get: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    create = async (body: ICreateMmTransaction): Promise<IResponse<IMmTransaction>> => {
        try {
            const response = await this.requester.post(this.links.mmTransactions, body);
            return response;
        } catch (error) {
            console.warn('MmSpendingCategoryService -> create: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    remove = async (id: number): Promise<IResponse<null>> => {
        try {
            const response = await this.requester.delete(this.links.mmTransactions + `/${id}`);
            return response;
        } catch (error) {
            console.warn('MmSpendingCategoryService -> remove: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    update = async (id: number, body: IUpdateMmTransaction): Promise<IResponse<IMmTransaction>> => {
        try {
            const response = await this.requester.patch(this.links.mmTransactions + `/${id}`, body);
            return response;
        } catch (error) {
            console.warn('MmSpendingCategoryService -> IRestPatch: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

}

export const mmTransactionService = new MmTransactionService(requester, links);
