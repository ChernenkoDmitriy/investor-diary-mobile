import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { scaleFontSize, scaleVertical } from '../../../../../utils';

export const getStyles = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: scaleVertical(40),
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
        },
        iconContainer: {
            width: 36,
            height: 36,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 4,
        },
        textContainer: {
            flex: 1,
            justifyContent: 'center',
        },
        title: {
            color: colors.text,
            fontFamily: 'Roboto-Regular',
            fontSize: scaleFontSize(16),
            lineHeight: scaleVertical(24),
        },
    });
    return styles;
}