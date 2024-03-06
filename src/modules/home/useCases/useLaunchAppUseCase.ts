import { exchangeRateService } from "../../../entities/exchangeRates/ExchangeRateService";

export const useLaunchAppUseCase = async () => {
    try {
        exchangeRateService.list();
    } catch (error) {
        console.warn('useLaunchAppUseCase: ', error);
    }
}; 