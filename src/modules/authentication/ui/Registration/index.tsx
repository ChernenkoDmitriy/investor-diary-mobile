import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../UIProvider';
import { useRegistration } from '../../presenters/useRegistration';
import { observer } from 'mobx-react';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { MainButton } from '../../../../UIKit/mainButton';
import { TextButton } from '../../../../UIKit/textButton';
import { AuthInput } from '../components/authInput';

export const RegistrationView: FC = observer(() => {
    const {
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
        onGoToAuthorization,
        onSecurePasswordEntry,
        onChangeLastName,
        onChangeFirstName,
        onChangePhone,
        onChangePassword,
        onSignUp,
    } = useRegistration();
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer scrollEnabled containerStyle={{ backgroundColor: colors.background }} >
            <View style={styles.container}>
                <View>
                    <Text style={styles.appNameText}>{t('appName').toUpperCase()}</Text>
                    <Text style={styles.instructionText}>{t('createNewAccount')}</Text>
                    <AuthInput
                        value={firstName}
                        onChangeText={onChangeFirstName}
                        placeholder={t('firstName')}
                    />
                    <AuthInput
                        value={lastName}
                        onChangeText={onChangeLastName}
                        placeholder={t('lastName')}
                    />
                    <AuthInput
                        keyboardType='number-pad'
                        value={phone}
                        onChangeText={onChangePhone}
                        placeholder={t('phone')}
                    />
                    <AuthInput
                        secureTextEntry={securePasswordEntry}
                        value={password}
                        onChangeText={onChangePassword}
                        placeholder={t('password')}
                    />
                </View>
                <View style={styles.footer}>
                    <MainButton onPress={onSignUp} title={t('signUpButton')} disabled={disabledButton} inProgress={false} />
                    <TextButton text={t('alreadySignUp')} onPress={onGoToAuthorization} />
                </View>
            </View>
        </ScreenContainer>
    );
});
