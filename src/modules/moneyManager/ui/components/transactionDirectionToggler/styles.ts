import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors, isIncome: boolean) => {
    const styles = StyleSheet.create({
        container: {
            height: 40,
            flexDirection: 'row',
            backgroundColor: isIncome ? colors.success : colors.warning,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
        },
        toggleContainer: {
            left: isIncome ? 2 : undefined,
            right: isIncome ? undefined : 2,
            position: 'absolute',
            width: 36,
            height: 36,
            borderRadius: 8,
            backgroundColor: colors.text_inverted,
        },
        text: {
            color: colors.text_inverted,
        }
    });
    return styles;
}
