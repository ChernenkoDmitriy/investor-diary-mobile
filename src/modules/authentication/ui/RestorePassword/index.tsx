import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../UIProvider'; 
import { EmailIcon } from '../../../../../assets/icons/inputs/EmailIcon'; 
import { observer } from 'mobx-react';
 import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { MainButton } from '../../../../UIKit/mainButton';
import { TextButton } from '../../../../UIKit/textButton';
import { AuthInputView } from '../../../../UIKit/authInputView';
import { useRestorePassword } from '../../presenters/useRestorePassword';

export const RestorePasswordView: FC = observer(() => {
    const { email, emailError, onRestorePassword, onGoToAuthorization, setEmail } = useRestorePassword();
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer scrollEnabled containerStyle={{ backgroundColor: colors.background }} >
            <View style={styles.container}>
                <View>
                    <Text style={styles.appNameText}>{t('appName').toUpperCase()}</Text>
                    <Text style={styles.instructionText}>{t('restorePassword')}</Text>
                    <AuthInputView
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                        placeholder={t('email')}
                        icon={<EmailIcon color={colors.icon} />}
                        error={emailError}
                    />
                </View>
                <View style={styles.footer}>
                    <MainButton
                        onPress={onRestorePassword}
                        title={t('restorePassword')}
                        disabled={!email}
                    />
                    <TextButton text={t('signIn')} onPress={onGoToAuthorization} />
                </View>
            </View>
        </ScreenContainer>
    )
})
