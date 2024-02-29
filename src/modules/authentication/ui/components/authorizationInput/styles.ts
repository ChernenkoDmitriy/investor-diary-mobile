import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 24,
        },
        input: {
            fontSize: 16,
            lineHeight: 24,
            height: 54,
            backgroundColor: colors.background,
            borderColor: colors.icon_light,
        },
        button: {
            height: 24,
            width: 24,
            justifyContent: 'center',
            alignItems: 'center',
        }
    })
    return styles;
};