import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        dropdown: {
            borderRadius: 6,
            borderColor: colors.border,
            backgroundColor: colors.background,
            paddingHorizontal: 16,
            height: 54,
        },
        dropDownContainerStyle: {
            borderColor: colors.border,
        },
        listItemContainerStyle: {
            paddingHorizontal: 16,
        },
    });
}
