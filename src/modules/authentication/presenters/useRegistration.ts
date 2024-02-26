import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { appStateModel } from '../../../entities/appState/AppStateModel';
import { useUiContext } from '../../../UIProvider';
import { signUpUseCase } from '../useCases/signUpUseCase';
import { userModel } from '../../../entities/user/UserModel';

export const useRegistration = () => {
    const { t } = useUiContext();
    const user = userModel.user;
    const navigation = useNavigation<any>();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [securePasswordEntry, setSecurePasswordEntry] = useState(true);
    const [firstNameError, setFirstNameError] = useState<string | undefined>(undefined);
    const [lastNameError, setLastNameError] = useState<string | undefined>(undefined);
    const [phoneError, setPhoneError] = useState<string | undefined>(undefined);
    const [passwordError, setPasswordError] = useState<string | undefined>(undefined);

    const onSecurePasswordEntry = useCallback(() => {
        setSecurePasswordEntry(prev => !prev);
    }, []);

    const onGoToAuthorization = useCallback(() => {
        navigation.navigate('AuthorizationView');
    }, []);

    const onSignUp = async () => {
        Keyboard.dismiss();
        appStateModel.isLoading = true;
        const response = await signUpUseCase(phone, firstName, lastName, password);
        if (response?.isError && (typeof response.message === 'object')) {
            setPhoneError(response.message.email || undefined);
            setPasswordError(response.message.password || undefined);
            setLastNameError(response.message.last_name || undefined);
            setFirstNameError(response.message.first_name || undefined);
        } else if (response?.isError && (response.message === 'user_exist')) {
            setPhoneError(t('user_exist'));
        }
        appStateModel.isLoading = false;
    }

    const disabledButton = !(phone && firstName && lastName && password);

    const onChangeLastName = useCallback((value: string) => {
        setLastName(value);
        setLastNameError(undefined);
    }, []);

    const onChangeFirstName = useCallback((value: string) => {
        setFirstName(value);
        setFirstNameError(undefined);
    }, []);

    const onChangePhone = useCallback((value: string) => {
        setPhone(value);
        setPhoneError(undefined);
    }, []);

    const onChangePassword = useCallback((value: string) => {
        setPassword(value);
        setPasswordError(undefined);
    }, []);

    return {
        firstNameError,
        lastNameError,
        phoneError,
        passwordError,
        disabledButton,
        phone,
        password,
        securePasswordEntry,
        firstName,
        lastName,
        onChangeLastName,
        onChangeFirstName,
        onChangePhone,
        onChangePassword,
        onSignUp,
        onGoToAuthorization,
        onSecurePasswordEntry,
    };
};
