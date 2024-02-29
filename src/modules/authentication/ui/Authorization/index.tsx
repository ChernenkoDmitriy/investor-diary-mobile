import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../UIProvider';
import { useAuthorization } from '../../presenters/useAuthorization';
import { observer } from 'mobx-react';
import { AuthorizationErrorText } from '../components/authorizationErrorText';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { Button } from '../../../../UIKit/Button';
import { TextButton } from '../../../../UIKit/textButton';
import { AuthorizationInput } from '../components/authorizationInput';

export const AuthorizationView: FC = observer(() => {
    const {
        authorizationError, disabledButton, phone, password, securePasswordEntry, onGoToRestorePassword,
        onSecurePasswordEntry, setPhone, setPassword, onGoToRegistration, onSignIn
    } = useAuthorization();
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer scrollEnabled containerStyle={{ backgroundColor: colors.background }} >
            <View style={styles.container}>
                <View>
                    <Text style={styles.appNameText}>{t('appName').toUpperCase()}</Text>
                    <Text style={styles.instructionText}>{t('authorizeToContinue')}</Text>
                    <AuthorizationInput
                        keyboardType='number-pad'
                        value={phone}
                        onChangeText={setPhone}
                        placeholder={t('phone')}
                    />
                    <AuthorizationInput
                        secureTextEntry={securePasswordEntry}
                        onSetSecureTextEntry={onSecurePasswordEntry}
                        value={password}
                        onChangeText={setPassword}
                        placeholder={t('password')}
                    />
                    <TextButton containerStyle={styles.restorePassword} text={t('forgotPassword')} onPress={onGoToRestorePassword} />
                </View>
                <View style={styles.footer}>
                    <AuthorizationErrorText isVisible={authorizationError} />
                    <Button
                        onPress={onSignIn}
                        text={t('signInButton')}
                        disabled={disabledButton}
                        inProgress={false} />
                    <TextButton text={t('doNotHaveAccount')} onPress={onGoToRegistration} />
                </View>
            </View>
        </ScreenContainer>
    )
})
