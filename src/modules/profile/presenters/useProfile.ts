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
        navigation.navigate('AuthorizationView');
    }

    const onExit = () => {
        Alert.alert(
            t('common.exit'),
            t('profile.exitProfile'),
            [
                { text: t('common.cancel'), style: 'cancel', },
                { text: t('common.exit'), style: 'destructive', onPress: exit, },
            ],
            { cancelable: false },
        );
    }

    return { onExit };

}