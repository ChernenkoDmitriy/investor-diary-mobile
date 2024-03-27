import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { DateData } from "react-native-calendars";
import { createMmTransactionUseCase } from "../useCases/createMmTransactionUseCase";
import { IMmTransaction } from "../entities/mmTransaction/IMmTransaction";
import { updateMmTransactionUseCase } from "../useCases/updateMmTransactionUseCase";

const DEFAULT_TRANSACTION = { currency: 'UAH', amount: 0, direction: 'expense', date: new Date().toLocaleDateString(), category_id: null, source_id: null };

export const useCreateMmTransaction = () => {
    const item: IMmTransaction = useRoute<any>().params?.item;
    const initialTransaction = item
        ? {
            currency: item.currency, amount: Number(item.amount), direction: item.direction,
            date: item.date, category_id: item.category?.id ? Number(item.category.id) : null, source_id: item.source?.id ? Number(item.source.id) : null
        }
        : DEFAULT_TRANSACTION;

    const [transaction, setTransaction] = useState<any>(initialTransaction);
    const [calendarVisible, setCalendarVisible] = useState(false);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onChangeValue = (key: any, value: string) => {
        if (key === 'amount') {
            const isIncorrect = isNaN(parseInt(value));
            !isIncorrect && setTransaction({ ...transaction, [key]: parseInt(value) });
        } else {
            setTransaction({ ...transaction, [key]: value });
        }
    }

    const onChangeDirection = (value: string) => {
        setTransaction({ ...transaction, direction: value, category_id: null });
    }

    const openCalendar = () => {
        setCalendarVisible(true);
    }

    const closeCalendar = () => {
        setCalendarVisible(false);
    }

    const onChoseDate = (day: DateData) => {
        setTransaction({ ...transaction, date: day.dateString });
        closeCalendar();
    }

    const onCreate = async () => {
        const { isError } = await createMmTransactionUseCase(transaction);
        if (!isError) {
            navigation.goBack();
        }
    }

    const onEdit = async () => {
        const { isError } = await updateMmTransactionUseCase(item?.id, transaction);
        if (!isError) {
            navigation.goBack();
        }
    }

    const onSave = item ? onEdit : onCreate;

    return { transaction, onSave, openCalendar, closeCalendar, onChoseDate, onChangeValue, onChangeDirection, calendarVisible };

}