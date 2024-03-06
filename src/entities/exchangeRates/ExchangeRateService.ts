import { ILinks, links } from "../../Links";
import { IRequester, requester } from "../../libs/requester";
import { IResponse } from "../../libs/requester/IRequester/IResponse";
import { exchangeRateModel } from "./ExchangeRateModel";
import { IExchangeRate } from "./IExchangeRate"; 

class ExchangeRateService {
    constructor(
        private requester: IRequester,
        private links: ILinks,
    ) { }

    list = async (): Promise<IResponse<IExchangeRate[]>> => {
        try {
            const response = await this.requester.get(this.links.exchangeRates);
            if (!response.isError && response.data) {
                exchangeRateModel.exchangeRates = response.data;
            }
            return response;
        } catch (error) {
            console.warn('ExchangeRateService -> list: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

}

export const exchangeRateService = new ExchangeRateService(requester, links);
