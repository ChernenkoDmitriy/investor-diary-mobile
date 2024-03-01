import React, { FC, memo, useMemo } from 'react';
import { View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { Dropdown } from '../../../../../UIKit/Dropdown';

interface IProps {
    value: string;
    onChange: (key: any, value: string) => void;
}

export const SectorDropdown: FC<IProps> = memo(({ value, onChange }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const ITEMS: any = [
        { label: t('technology'), value: 'Technology' },
        { label: t('finance'), value: 'Finance' },
        { label: t('healthcare'), value: 'Healthcare' },
        { label: t('consumerCyclical'), value: 'Consumer Cyclical' },
        { label: t('industrial'), value: 'Industrial' },
        { label: t('communicationServices'), value: 'Communication Services' },
        { label: t('consumerDefensive'), value: 'Consumer Defensive' },
        { label: t('energy'), value: 'Energy' },
        { label: t('basicMaterials'), value: 'Basic Materials' },
        { label: t('realEstate'), value: 'Real Estate' },
        { label: t('utilities'), value: 'Utilities' },
        { label: t('undefined'), value: null },
    ]

    const onChangeValue = (value: { label: string; value: string; }) => {
        onChange('sector', value.value);
    }

    return (
        <View style={styles.container} >
            <Dropdown
                value={value}
                setValue={onChangeValue}
                items={ITEMS}
                placeholder={t('sector')}
            />
        </View>
    );
})