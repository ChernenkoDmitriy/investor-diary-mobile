import React, { FC, memo, useMemo } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { getStyle } from './styles'; import { useUiContext } from '../../../../../UIProvider';

interface IProps extends TextInputProps {
    icon?: React.ReactNode;
}

export const AuthInput: FC<IProps> = memo((props) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        // keyboardType='email-address'
        // value={email}
        // onChangeText={setEmail}
        // placeholder={t('email')}
        // icon={<EmailIcon color={colors.icon} />}
        <View style={styles.container}>
            <TextInput
            style={styles.input}
                {...props}
            />
        </View>
    )
})
