import React, { FC, useMemo } from 'react';
import { View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { Dropdown } from '../../../../../UIKit/Dropdown';
import { observer } from 'mobx-react';
import { exchangeRateModel } from '../../../../../entities/exchangeRates/ExchangeRateModel';

interface IProps {
    value: string;
    onChange: (key: any, value: string) => void;
}

export const CurrencyDropdown: FC<IProps> = observer(({ value, onChange }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const ITEMS: any = useMemo(() => {
        const items = exchangeRateModel.exchangeRates?.map((exchangeRate) => {
            return { label: exchangeRate.currency, value: exchangeRate.currency }
        }) || [];
        return items;
    }, [exchangeRateModel.exchangeRates]);

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