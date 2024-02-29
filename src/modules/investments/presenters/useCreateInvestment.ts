import { useState } from "react";
import { DateData } from "react-native-calendars";
import { createInvestmentUseCase } from "../useCases/createInvestmentUseCase";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type InvestmentValue = 'name' | 'currency' | 'icon' | 'ticker' | 'comment' | 'broker' | 'enteringPrice' | 'enteringDate' | 'amount' | 'type' | 'sector';
const DEFAULT_INVESTMENT = {
    id: 0, name: '', currency: '', icon: '', ticker: '', comment: '',
    broker: '', enteringPrice: 0, enteringDate: '', amount: 1, type: '', sector: '',
};

export const useCreateInvestment = () => {
    const [investment, setInvestment] = useState(DEFAULT_INVESTMENT);
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

    return { investment, onChangeValue, calendarVisible, openCalendar, closeCalendar, onChoseDate, onCreate };
}