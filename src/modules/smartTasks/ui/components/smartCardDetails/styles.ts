import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { scaleFontSize, scaleVertical } from '../../../../../utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginBottom: scaleVertical(16),
        },
        latterContainer: {
            width: scaleVertical(64),
            height: scaleVertical(64),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primary,
            borderRadius: 8,
        },
        latter: {
            color: colors.text_inverted,
            fontSize: scaleFontSize(36),
            lineHeight: scaleFontSize(44),
            fontFamily: 'Roboto-Regular',
        },
        item: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
            backgroundColor: colors.card,
            borderRadius: 8,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.1,
        },
        textContainer: {
            paddingHorizontal: 16,
            paddingVertical: 8,
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
        }
    });
    return styles;
}
