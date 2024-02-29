import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.primary,
            borderRadius: 4,
            elevation: 4,
            minHeight: 48,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 8,
        },
        disabledButton: {
            // opacity: 0.7,
        },
        text: {
            fontSize: 20,
            lineHeight: 24,
            color: colors.text_inverted,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        disabledButtonText: {

        },
        absoluteSheet: {
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return styles;
}
