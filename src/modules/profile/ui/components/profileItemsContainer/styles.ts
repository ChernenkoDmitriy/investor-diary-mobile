import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyles = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.card,
            marginHorizontal: 16,
            marginTop: 16,
            borderRadius: 8,
            paddingVertical: 4,
        },
    });
    return styles;
}