import React, { FC, useMemo } from 'react';
import { View, TextInput, TouchableOpacity } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { observer } from 'mobx-react';
import { InfoIcon } from '../../../../../assets/icons/InfoIcon';
import { Typography } from '../../../../../UIKit/Typography';
import { exchangeRateModel } from '../../../../../entities/exchangeRates/ExchangeRateModel';
import { Dropdown } from '../../../../../UIKit/Dropdown';

interface IProps {
    label: string;
    value: string;
    currency: string;
    option: any;
    onChangeText: (key: any, value: string) => void;
}

export const SmartTaskMeasurable: FC<IProps> = observer(({ label, option, value, currency, onChangeText }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandleChangeText = (text: string) => {
        onChangeText(option, text);
    }

    const onHandleChangeCurrency = (value: { label: string; value: string; }) => {
        onChangeText('currency', value.value);
    }

    const ITEMS: any = useMemo(() => {
        const items = exchangeRateModel.exchangeRates?.map((exchangeRate) => {
            return { label: exchangeRate.currency, value: exchangeRate.currency }
        }) || [];
        return items;
    }, [exchangeRateModel.exchangeRates]);

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <View style={{ flex: 1 }} >
                    <Typography variant='label' text={label} />
                    <Typography variant='caption' text={t(`description_${option}`)} />
                </View>
                <TouchableOpacity style={styles.infoButton}>
                    <InfoIcon color={colors.icon_strong} />
                </TouchableOpacity>
            </View>
            <View style={styles.inputsRow}>
                <TextInput
                    placeholder={t(`placeholder_${option}`)}
                    placeholderTextColor={colors.text_light}
                    style={styles.input}
                    value={value}
                    onChangeText={onHandleChangeText}
                />
                <View style={styles.currencyDropdown}>
                    <Dropdown
                        value={currency}
                        setValue={onHandleChangeCurrency}
                        items={ITEMS}
                        placeholder={t('currency')}
                    />
                </View>
            </View>
        </View>
    );
})