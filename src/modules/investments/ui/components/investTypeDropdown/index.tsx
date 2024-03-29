import React, { FC, memo, useMemo } from 'react';
import { View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { Dropdown } from '../../../../../UIKit/Dropdown';

interface IProps {
    value: string;
    onChange: (key: any, value: string) => void;
}

export const InvestTypeDropdown: FC<IProps> = memo(({ value, onChange }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const ITEMS = [
        { label: t('stock'), value: 'Stock' },
        { label: t('crypto'), value: 'Crypto' },
        { label: t('obligation'), value: 'Obligation' },
        { label: t('deposit'), value: 'Deposit' },
        { label: t('cash'), value: 'Cash' },
        { label: t('otherInvestmentType'), value: 'Other' }
    ]

    const onChangeValue = (value: { label: string; value: string; }) => {
        onChange('type', value.value);
    }

    return (
        <View style={styles.container} >
            <Dropdown
                value={value}
                setValue={onChangeValue}
                items={ITEMS}
                placeholder={t('type')}
            />
        </View>
    );
})