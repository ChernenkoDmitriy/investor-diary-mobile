import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { appStateModel } from "../../../entities/appState/AppStateModel";
import { userModel } from "../../../entities/user/UserModel";
import { getInvestmentsUseCase } from "../../investments/useCases/getInvestmentsUseCase";

export const useLaunchApp = () => {
    const user = userModel.user;
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        if (user) {
            getInvestmentsUseCase();
        }
    }, [user]);


    useEffect(() => {
        setTimeout(() => {
            const isShowForceUpdate = appStateModel.isShowForceUpdate;
            const destination = userModel.user ? 'TabNavigator' : 'AuthorizationView';
            if (!isShowForceUpdate) {
                navigation.reset({ index: 0, routes: [{ name: destination }], });
            }
        }, 1000);
    }, []);

}
