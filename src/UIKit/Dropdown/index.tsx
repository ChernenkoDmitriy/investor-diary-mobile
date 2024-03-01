import React, { FC, memo, useMemo, useState } from 'react';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import DropDownPicker, { ValueType, } from 'react-native-dropdown-picker';

interface IProps {
    value: string;
    items: { label: string, value: string }[];
    placeholder?: string;
    setValue: (value: { label: string, value: string }) => void;
}

DropDownPicker.setListMode("SCROLLVIEW");

export const Dropdown: FC<IProps> = memo(({ value, items, placeholder, setValue }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [open, setOpen] = useState(false);

    return (
        <DropDownPicker
            closeOnBackPressed={true}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            listItemContainerStyle={styles.listItemContainerStyle} 
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            onSelectItem={setValue}
            placeholder={placeholder}
        />
    )
});
