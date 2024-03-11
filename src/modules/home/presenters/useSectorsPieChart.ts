import { useMemo } from "react";
import { exchangeRateModel } from "../../../entities/exchangeRates/ExchangeRateModel";
import { investmentsModel } from "../../investments/entity/InvestmentsModel";

export const useSectorsPieChart = () => {

    const chartData = useMemo(() => {
        const result = {
            'Technology': { color: '#35AB37', value: 0, legend: 'technology', percentage: 0 },
            'Finance': { color: '#FFB946', value: 0, legend: 'finance', percentage: 0 },
            'Healthcare': { color: '#FF6B6B', value: 0, legend: 'healthcare', percentage: 0 },
            'Consumer Cyclical': { color: '#FFD166', value: 0, legend: 'consumerCyclical', percentage: 0 },
            'Industrial': { color: '#06D6A0', value: 0, legend: 'industrial', percentage: 0 },
            'Communication Services': { color: '#118AB2', value: 0, legend: 'communicationServices', percentage: 0 },
            'Consumer Defensive': { color: '#073B4C', value: 0, legend: 'consumerDefensive', percentage: 0 },
            'Energy': { color: '#EF476F', value: 0, legend: 'energy', percentage: 0 },
            'Basic Materials': { color: '#FFD166', value: 0, legend: 'basicMaterials', percentage: 0 },
            'Real Estate': { color: '#118AB2', value: 0, legend: 'realEstate', percentage: 0 },
            'Utilities': { color: '#073B4C', value: 0, legend: 'utilities', percentage: 0 },
            'Other': { color: '#EF476F', value: 0, legend: 'other', percentage: 0 },
        };
        investmentsModel.investments?.forEach((investment) => {
            let price = investment.enteringPrice;
            if (isNaN(price)) {
                price = 0;
            }
            if (investment.currency !== 'USD') {
                const exchangeRate = exchangeRateModel.exchangeRates?.find((rate) => rate.currency === investment.currency);
                if (exchangeRate) {
                    price = price / Number(exchangeRate.rate);
                }
            }
            if (investment.type !== 'Stock') {
                return;
            }
            result[investment.sector].value += price * investment.amount;
        });
        const total = Object.values(result).reduce((acc, item) => acc + item.value, 0);
        Object.values(result).forEach((item) => { item.percentage = Math.round(item.value / total * 100); });
        return Object.values(result);
    }, [investmentsModel.investments, exchangeRateModel.exchangeRates]);

    return { chartData };

}