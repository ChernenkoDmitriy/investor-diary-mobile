import { useState } from "react";
import { DateData } from "react-native-calendars";
import { createInvestmentUseCase } from "../useCases/createInvestmentUseCase";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IInvestment } from "../entity/IInvestment";
import { updateInvestmentUseCase } from "../useCases/updateInvestmentUseCase";

type InvestmentValue = 'name' | 'currency' | 'icon' | 'ticker' | 'comment' | 'broker' | 'enteringPrice' | 'enteringDate' | 'amount' | 'type' | 'sector';
const DEFAULT_INVESTMENT: any = {
    id: 0, name: '', currency: '', icon: '', ticker: '', comment: '',
    broker: '', enteringPrice: 0, enteringDate: undefined, amount: 1, type: '', sector: '',
};

export const useCreateInvestment = () => {
    const item: IInvestment = useRoute<any>().params?.item;
    const [investment, setInvestment] = useState(item || DEFAULT_INVESTMENT);
    const [calendarVisible, setCalendarVisible] = useState(false);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onChangeValue = (key: InvestmentValue, value: string) => {
        if (key === 'enteringPrice') {
            const isIncorrect = isNaN(parseFloat(value));
            !isIncorrect && setInvestment({ ...investment, [key]: parseFloat(value) });
        } else if (key === 'amount') {
            const isIncorrect = isNaN(parseInt(value));
            !isIncorrect && setInvestment({ ...investment, [key]: parseInt(value) });
        } else {
            setInvestment({ ...investment, [key]: value });
        }
    }

    const openCalendar = () => {
        setCalendarVisible(true);
    }

    const closeCalendar = () => {
        setCalendarVisible(false);
    }

    const onChoseDate = (day: DateData) => {
        setInvestment({ ...investment, enteringDate: day.dateString });
        closeCalendar();
    }

    const onCreate = async () => {
        const { isError } = await createInvestmentUseCase(investment);
        if (!isError) {
            navigation.goBack();
        }
    }

    const onEdit = async () => {
        const { isError } = await updateInvestmentUseCase(investment);
        if (!isError) {
            navigation.goBack();
        }
    }

    const onSave = item ? onEdit : onCreate;

    return { investment, onChangeValue, calendarVisible, openCalendar, closeCalendar, onChoseDate, onSave };
}