import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../../utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        periodButton: {
            height: scaleVertical(40),
            borderRadius: 8,
            paddingVertical: scaleVertical(4),
            paddingHorizontal: scaleHorizontal(12),
            backgroundColor: colors.card,
            marginHorizontal: scaleHorizontal(20),
            marginBottom: scaleVertical(20),
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        periodText: {
            color: colors.text_strong,
            fontFamily: 'Inter-Regular',
            fontSize: scaleFontSize(14),
            lineHeight: scaleFontSize(18),
            marginRight: scaleHorizontal(10),
        },
        modal: {
            flex: 1,
            margin: 0,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
        },
        container: {
            alignItems: 'center',
            backgroundColor: colors.card,
            borderRadius: 8,
            padding: 10,
            height: scaleVertical(420),
        },
        calendar: {
            width: scaleHorizontal(261),
            backgroundColor: colors.card,
        },
        button: {
            height: scaleVertical(40),
            borderRadius: 8,
            paddingVertical: scaleVertical(4),
            paddingHorizontal: scaleHorizontal(12),
            backgroundColor: colors.primary,
            alignSelf: 'flex-end',
            marginTop: scaleVertical(10),
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            color: colors.text_inverted,
            fontFamily: 'Inter-Regular',
            fontSize: scaleVertical(14),
            lineHeight: scaleVertical(18),
        },
    });
    return styles;
}
