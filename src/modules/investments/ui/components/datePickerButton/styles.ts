import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 16,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 24,
            height: 54,
            backgroundColor: colors.background,
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: 6,
            flex: 0.8,
        },
    });
    return styles;
}
