import { useEffect, useMemo, useState } from "react";
import { mmTransactionModel } from "../entities/mmTransaction/MmTransactionModel";
import { getMmTransactionUseCase } from "../useCases/getMmTransactionUseCase";
import { TMmTransactionUsParams } from "../entities/mmTransaction/MmTransactionService";
import { IMmTransaction } from "../entities/mmTransaction/IMmTransaction";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const useMmTransactionsList = () => {
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const navigation = useNavigation<StackNavigationProp<any>>();
    const transactions = mmTransactionModel.mmTransactions;

    useEffect(() => {
        getTransactions();
    }, []);

    const getTransactions = async (params?: TMmTransactionUsParams) => {
        setLoading(true);
        const result = await getMmTransactionUseCase(params);
        if (!result.isError) {
            setTotal(result.data?.count || 0);
        }
        setLoading(false);
    }

    const onRefresh = async () => {

    };

    const onGoToDetailInvestment = (item: IMmTransaction) => {
        navigation.navigate('MmTransactionDetails', { item });
    }

    const onEndReached = async () => {
        if (transactions && transactions.length < total && !loading) {
            await getTransactions({ offset: transactions.length, limit: 100 });
        }
    }

    const data = useMemo(() => {
        const sections = transactions?.reduce((acc: any, item: any) => {
            const date = item.date.split('T')[0];
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(item);
            return acc;
        }, {}) || {};

        return Object.keys(sections).map((date) => ({ title: date, data: sections[date] })) || [];
    }, [transactions]);

    return { loading, data, onEndReached, onRefresh, onGoToDetailInvestment };
}