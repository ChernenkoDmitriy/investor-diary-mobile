import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { scaleFontSize, scaleVertical } from '../../../../../utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginBottom: scaleVertical(16),
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
        },
        infoButton: {
            height: 44,
            width: 44,
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            height: scaleVertical(44),
            backgroundColor: colors.card,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colors.border,
            paddingHorizontal: 16,
            color: colors.text_strong,
            fontSize: scaleFontSize(14),
            lineHeight: scaleFontSize(18),
            fontFamily: 'Roboto-Regular',
        }
    });
    return styles;
}
