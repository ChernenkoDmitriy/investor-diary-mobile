import { useMemo } from "react";
import { exchangeRateModel } from "../../../entities/exchangeRates/ExchangeRateModel";
import { investmentsModel } from "../../investments/entity/InvestmentsModel";

export const useInvestmentPieChart = () => {

    const chartData = useMemo(() => {
        const result = {
            conservativePart: { color: '#35AB37', value: 0, legend: 'conservativePart', percentage: 0 }, //  'Obligation' | 'Deposit'
            aggressivePart: { color: '#7B35AB', value: 0, legend: 'aggressivePart', percentage: 0 }, // 'Stock' 
            otherPart: { color: '#3555AB', value: 0, legend: 'otherPart', percentage: 0 }, // 'Crypto' | 'Cash' | 'Other'
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
            if (investment.type === 'Stock') {
                result.aggressivePart.value += price * investment.amount;
            } else if (investment.type === 'Obligation' || investment.type === 'Deposit') {
                result.conservativePart.value += price * investment.amount;
            } else {
                result.otherPart.value += price * investment.amount;
            }
        });
        const total = result.conservativePart.value + result.aggressivePart.value + result.otherPart.value;
        result.conservativePart.percentage = Math.round(result.conservativePart.value / total * 100);
        result.aggressivePart.percentage = Math.round(result.aggressivePart.value / total * 100);
        result.otherPart.percentage = Math.round(result.otherPart.value / total * 100);
        return Object.values(result);
    }, [investmentsModel.investments, exchangeRateModel.exchangeRates]);

    return { chartData };

}