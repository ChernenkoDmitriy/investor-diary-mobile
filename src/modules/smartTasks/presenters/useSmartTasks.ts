import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { smartTaskModel } from "../entity/SmartTaskModel";
import { useEffect, useState } from "react";
import { smartTaskService } from "../entity/SmartTaskService";
import { ISmartTask } from "../entity/ISmartTask";

export const useSmartTasks = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation<StackNavigationProp<any>>();
    const data = smartTaskModel.all || [];

    useEffect(() => {
        onRefresh();
    }, []);

    const onRefresh = async () => {
        smartTaskModel.all = null;
        await getTemplates();
    }

    const getTemplates = async () => {
        setIsLoading(true);
        await smartTaskService.all();
        setIsLoading(false);
    }

    const onGoToCreateSmartTask = () => {
        navigation.navigate("SmartTasksCreateView");
    }

    const onGoToCreateSmartDetails = (item: ISmartTask) => {
        smartTaskModel.current = item;
        navigation.navigate("SmartTasksDetailsView");
    }

    return { onGoToCreateSmartTask, onGoToCreateSmartDetails, onRefresh, data, isLoading };
}