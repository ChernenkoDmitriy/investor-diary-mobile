import React, { FC, useMemo, memo } from 'react';
import { Text, ActivityIndicator, View, ViewStyle, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface Props {
    containerStyle?: ViewStyle;
    title: string;
    onPress: () => void;
    disabled?: boolean;
    inProgress?: boolean;
    prefix?: React.ReactNode;
    postfix?: React.ReactNode;
}

export const MainButton: FC<Props> = memo(({ onPress = () => { }, title = '', prefix, postfix, disabled, inProgress, containerStyle = {} }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity
            disabled={disabled}
            style={[styles.container, containerStyle, disabled ? { opacity: 0.7 } : undefined]}
            onPress={onPress}
        >
            {prefix}
            <Text style={styles.text}>{title?.toUpperCase()}</Text>
            {postfix}
            {inProgress ? <View style={styles.absoluteSheet}><ActivityIndicator color={colors.primary} size='large' /></View> : null}
        </TouchableOpacity>
    );
})
