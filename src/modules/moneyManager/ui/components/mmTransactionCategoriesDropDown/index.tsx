import React, { FC, useMemo } from 'react';
import { View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { Dropdown } from '../../../../../UIKit/Dropdown';
import { observer } from 'mobx-react';
import { mmSpendingCategoryModel } from '../../../entities/mmSpendingCategory/MmSpendingCategoryModel';

interface IProps {
    direction: string;
    value: number | null;
    onChange: (key: any, value: string) => void;
}

export const MmTransactionCategoriesDropDown: FC<IProps> = observer(({ direction, value, onChange }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const ITEMS: any = useMemo(() => {
        if (!mmSpendingCategoryModel.mmSpendingCategories) return [];
        const items: any = mmSpendingCategoryModel.mmSpendingCategories
            .filter((item) => item.direction === direction)
            .map((item) => { return { label: item.name, value: item.id } });
        items.unshift({ label: t('category'), value: null });
        return items;
    }, [mmSpendingCategoryModel.mmSpendingCategories, direction]);

    const onChangeValue = (value: { label: string; value: string; }) => {
        onChange('category_id', value.value);
    }

    return (
        <View style={styles.container} >
            <Dropdown
                value={value}
                setValue={onChangeValue}
                items={ITEMS}
                placeholder={t('category')}
            />
        </View>
    );
})