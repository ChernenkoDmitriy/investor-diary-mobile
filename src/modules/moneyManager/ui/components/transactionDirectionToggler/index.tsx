import React, { FC, useMemo } from 'react';
import { LayoutAnimation, TouchableOpacity, UIManager, View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { observer } from 'mobx-react';
import { Typography } from '../../../../../UIKit/Typography';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

interface IProps {
    value: string | 'income' | 'expense';
    onChange: (value: string) => void;
}

export const TransactionDirectionToggler: FC<IProps> = observer(({ value, onChange }) => {
    const { colors, t } = useUiContext();
    const isIncome = value === 'income';
    const styles = useMemo(() => getStyle(colors, isIncome), [colors, isIncome]);

    const onChangeValue = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const value = isIncome ? 'expense' : 'income';
        onChange(value);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onChangeValue} activeOpacity={0.9} >
            <View style={styles.toggleContainer} />
            <Typography text={t(value)} variant='h6' style={styles.text} />
        </TouchableOpacity>
    );
})