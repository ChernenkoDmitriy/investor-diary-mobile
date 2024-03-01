import React, { FC, memo, useMemo } from 'react';
import { View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { Dropdown } from '../../../../../UIKit/Dropdown';

interface IProps {
    value: string;
    onChange: (key: any, value: string) => void;
}

export const CurrencyDropdown: FC<IProps> = memo(({ value, onChange }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const ITEMS: any = [
        { label: t('uah'), value: 'UAH' },
        { label: t('usd'), value: 'USD' },
        { label: t('eur'), value: 'EUR' },
        { label: t('gbp'), value: 'GBP' },
        { label: t('undefined'), value: null },
    ]

    const onChangeValue = (value: { label: string; value: string; }) => {
        onChange('currency', value.value);
    }

    return (
        <View style={styles.container} >
            <Dropdown
                value={value}
                setValue={onChangeValue}
                items={ITEMS}
                placeholder={t('currency')}
            />
        </View>
    );
})