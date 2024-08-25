import { useState } from "react";
import { DateData } from "react-native-calendars";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ISmartTask } from "../entity/ISmartTask";
import { smartTaskService } from "../entity/SmartTaskService";

type TItemValues = 'name' | 'specific' | 'measurable' | 'achievable' | 'relevant' | 'time_bound' | 'currency' | 'status';
const DEFAULT_ITEM: any = { name: '', specific: 'Deposit', measurable: '', achievable: '', relevant: '', time_bound: '', currency: '', status: 'Active', };

export const useSmartTasksCreate = () => {
    const item: ISmartTask = useRoute<any>().params?.item;
    const [smartTask, setSmartTask] = useState(item || DEFAULT_ITEM);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onChangeValue = (key: TItemValues, value: string) => {
        if (key === 'measurable') {
            const isIncorrect = isNaN(parseFloat(value));
            (!isIncorrect || !value) && setSmartTask({ ...smartTask, [key]: value });
        } else {
            setSmartTask({ ...smartTask, [key]: value });
        }
    }

    const onChoseDate = (day: DateData) => {
        setSmartTask({ ...smartTask, time_bound: day.dateString });
    }

    const onCreate = async () => {
        const body = { ...smartTask, time_bound: new Date(smartTask.time_bound).getTime(), measurable: parseFloat(smartTask.measurable) };
        const { isError } = await smartTaskService.create(body);
        if (!isError) {
            navigation.goBack();
        }
    }

    const onEdit = async () => {
        const body = {
            ...smartTask,
            time_bound: new Date(smartTask.time_bound).getTime(),
            measurable: parseFloat(smartTask.measurable),
            // @ts-ignore
            progress_value:  parseFloat(smartTask.progress_value),
        };
        console.log('body', body);
        const { isError } = await smartTaskService.update(body);
        if (!isError) {
            navigation.goBack();
        }
    }

    const onSave = item ? onEdit : onCreate;

    return { smartTask, onChangeValue, onChoseDate, onSave };
}