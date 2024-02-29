import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Keyboard } from "react-native";
import { appStateModel } from "../../../entities/appState/AppStateModel";
import { signInUseCase } from "../useCases/signInUseCase";
import { userModel } from "../../../entities/user/UserModel";
import { StackNavigationProp } from "@react-navigation/stack";

export const useAuthorization = () => {
    const user = userModel.user;
    const token = userModel.token;
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [securePasswordEntry, setSecurePasswordEntry] = useState(true);
    const [authorizationError, setAuthorizationError] = useState(false);

    useEffect(() => {
        if (user && token) {
            navigation.reset({ index: 0, routes: [{ name: 'TabNavigator' }], });
        }
    }, [user, token]);

    useEffect(() => {
        setAuthorizationError(false);
    }, [phone, password]);

    const onSecurePasswordEntry = useCallback(() => {
        setSecurePasswordEntry(prev => !prev)
    }, []);

    const onGoToRegistration = useCallback(() => {
        setPhone('');
        setPassword('');
        navigation.navigate('RegistrationView');
    }, []);

    const onGoToRestorePassword = useCallback(() => {
        setPhone('');
        setPassword('');
        navigation.navigate('RestorePasswordView');
    }, []);

    const onSignIn = async () => {
        Keyboard.dismiss();
        appStateModel.isLoading = true;
        const response = await signInUseCase({ phone, password });
        if (response?.isError) {
            setAuthorizationError(true);
        }
        appStateModel.isLoading = false;
    }

    const disabledButton = useMemo(() => (!(phone && password)), [phone, password]);

    return {
        phone, password, securePasswordEntry, disabledButton, authorizationError, onGoToRestorePassword,
        onSecurePasswordEntry, setPhone, setPassword, onGoToRegistration, onSignIn
    };

}