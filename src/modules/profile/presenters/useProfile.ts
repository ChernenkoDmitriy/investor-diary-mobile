import { Alert } from "react-native";
import { useUiContext } from "../../../UIProvider";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { userModel } from "../../../entities/user/UserModel";

export const useProfile = () => {
    const { t } = useUiContext();
    const navigation = useNavigation<StackNavigationProp<any>>();

    const exit = async () => {
        userModel.clear();
        navigation.reset({ index: 0, routes: [{ name: 'AuthorizationView' }], });
    }

    const onExit = () => {
        Alert.alert(
            t('exit'),
            t('exitProfile'),
            [
                { text: t('cancel'), style: 'cancel', },
                { text: t('exit'), style: 'destructive', onPress: exit, },
            ],
            { cancelable: false },
        );
    }

    return { onExit };

}