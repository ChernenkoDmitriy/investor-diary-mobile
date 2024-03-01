import React, { FC, useMemo, memo } from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';
import { EyeCrossIcon } from '../../../../../assets/icons/EyeCrossIcon';
import { EyeIcon } from '../../../../../assets/icons/EyeIcon';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { InputOutline, InputOutlineProps } from 'react-native-input-outline';
import { isIOS } from '../../../../../utils';

interface IProps extends InputOutlineProps {
    onSetSecureTextEntry?: () => void;
    containerStyle?: ViewStyle;
}

export const AuthorizationInput: FC<IProps> = memo((props) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={[styles.container, props.containerStyle]}>
            <InputOutline
                style={styles.input}
                paddingVertical={props?.value ? 5 : isIOS ? 18 : 16}
                activeColor={colors.primary}
                inactiveColor={colors.border}
                fontColor={colors.text_strong}
                placeholderTextColor={colors.text_light}
                trailingIcon={() => props.onSetSecureTextEntry
                    ? <TouchableOpacity onPress={props.onSetSecureTextEntry} style={styles.button}>
                        {props.secureTextEntry ? <EyeIcon color={colors.icon_strong} /> : <EyeCrossIcon color={colors.icon_strong} />}
                    </TouchableOpacity>
                    : null}
                {...props}
            />
        </View>
    );
});
