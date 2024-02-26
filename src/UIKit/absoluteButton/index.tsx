import React, { FC, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import { PlusIcon } from '../../assets/icons/PlusIcon';

interface IProps {
    onPress: () => void;
    disabled?: boolean;
}

export const AbsoluteButton: FC<IProps> = ({ disabled, onPress }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { opacity: disabled ? 0.7 : 1 }]} disabled={disabled}>
            <PlusIcon color={colors.card} />
        </TouchableOpacity>
    )
}
