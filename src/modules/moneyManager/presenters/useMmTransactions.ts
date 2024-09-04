import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { getMmTransactionUseCase } from "../useCases/getMmTransactionUseCase";
import { mmTransactionModel } from "../entities/mmTransaction/MmTransactionModel";
import { useEffect, useState } from "react";
import { CalendarUtils } from "react-native-calendars";

const now = new Date();
now.setDate(now.getDate() - 60);
const START_DEY = CalendarUtils.getCalendarDateString(new Date(now));
const END_DAY = CalendarUtils.getCalendarDateString(new Date());

export const useMmTransactions = () => {
    const [range, setRange] = useState({ startDate: START_DEY, endDate: END_DAY });
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        onGetTransactionsPeriod(range.startDate, range.endDate);
    }, [range]);

    const onGoToCreateTransaction = () => {
        navigation.navigate("MmTransactionCreateView");
    }

    const onGetTransactionsPeriod = async (periodStart: string, periodEnd: string) => {
        mmTransactionModel.mmTransactions = [];
        await getMmTransactionUseCase({ start_date: periodStart, end_date: periodEnd });
    }

    return { range, setRange, onGoToCreateTransaction, onGetTransactionsPeriod };
}