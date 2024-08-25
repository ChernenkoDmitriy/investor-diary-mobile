import { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { ISmartTask } from "../entity/ISmartTask";
import { smartTaskService } from "../entity/SmartTaskService";
import { smartTaskModel } from "../entity/SmartTaskModel";

export const useSmartTasksDetails = () => {
    const [smartTask, setSmartTask] = useState(smartTaskModel.current || {} as ISmartTask);
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        return () => {
            smartTaskModel.current = null;
        }
    }, []);

    const onChangeValue = (value: string) => {
        const isIncorrect = isNaN(parseFloat(value));
        (!isIncorrect || !value) && setSmartTask({ ...smartTask, progress_value: parseFloat(value) });
    }

    const onSave = async () => {
        const body = { ...smartTask, time_bound: new Date(smartTask.time_bound).getTime() };
        console.log(JSON.stringify(body, null, 2));
        const { isError } = await smartTaskService.update(body);
        if (!isError) {
            navigation.goBack();
        }
    }

    const onDelete = async () => {
        const { isError } = await smartTaskService.delete(smartTask.id);
        if (!isError) {
            smartTaskService.all();
            navigation.goBack();
        }
    }

    const onGoToEdit = () => {
        navigation.navigate('SmartTasksCreateView', { item: smartTask });
    }

    return { smartTask, onChangeValue, onSave, onDelete, onGoToEdit };
}