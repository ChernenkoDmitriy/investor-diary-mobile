import { useMemo } from "react";
import { mmTransactionModel } from "../entities/mmTransaction/MmTransactionModel";
import { exchangeRateModel } from "../../../entities/exchangeRates/ExchangeRateModel";
import { mmSpendingCategoryModel } from "../entities/mmSpendingCategory/MmSpendingCategoryModel";

export const useMmPieChart = () => {
    const transactions = mmTransactionModel.mmTransactions;

    const chartData = useMemo(() => {
        const result: any = { 'Other': { color: '#3555AB', value: 0, legend: 'Other', percentage: 0 } };
        transactions?.forEach((transaction) => {
            let price = transaction.amount;
            if (isNaN(price)) {
                price = 0;
            }
            // if (transaction.currency !== 'USD') {
            //     const exchangeRate = exchangeRateModel.exchangeRates?.find((rate) => rate.currency === transaction.currency);
            //     if (exchangeRate) {
            //         price = price / Number(exchangeRate.rate);
            //     }
            // }

            const category = mmSpendingCategoryModel.mmSpendingCategories?.find((category) => category.id === transaction.category?.id);
            if (category && !result[category.name]) {
                result[category.name] = { color: category.color, value: Number(price), legend: category.name, percentage: 0 };
            } else if (category) {
                result[category.name].value += Number(price);
            } else if (!result['Other']) {
                result['Other'] = { color: '#3555AB', value: Number(price), legend: 'Other', percentage: 0 };
            } else {
                result['Other'].value += Number(price);
            }
        });
        const total = Object.values(result).reduce((acc, item: any) => acc + item.value, 0) as number;
        Object.values(result).forEach((item: any) => { item.percentage = Math.round(item.value / total * 100); });
        return Object.values(result) as any;
    }, [transactions, exchangeRateModel.exchangeRates, mmSpendingCategoryModel.mmSpendingCategories]);

    return { chartData };

}