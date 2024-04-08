import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { getMmTransactionUseCase } from "../useCases/getMmTransactionUseCase";
import { mmTransactionModel } from "../entities/mmTransaction/MmTransactionModel";

export const useMmTransactions = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onGoToCreateTransaction = () => {
        navigation.navigate("MmTransactionCreateView");
    }

    const onGetTransactionsPeriod = async (periodStart: string, periodEnd: string) => {
        mmTransactionModel.mmTransactions = [];
        await getMmTransactionUseCase({ start_date: periodStart, end_date: periodEnd });
    }

    const onClear = async () => {
        mmTransactionModel.mmTransactions = [];
        await getMmTransactionUseCase();
    }

    return { onGoToCreateTransaction, onGetTransactionsPeriod, onClear };
}