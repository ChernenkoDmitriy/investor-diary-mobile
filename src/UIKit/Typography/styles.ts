import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';
import { scaleFontSize } from '../../utils';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        label: {
            color: colors.text_strong,
            fontSize: scaleFontSize(16),
            lineHeight: scaleFontSize(20),
            fontFamily: 'Roboto-Regular',
            fontWeight: '500',
        },
        caption: {
            fontSize: 12,
            lineHeight: 16,
            fontFamily: 'Roboto-Light',
            color: colors.text,
        },



        h1: {
            fontSize: 48,
            lineHeight: 58,
            fontFamily: 'Roboto-Bold',
            color: colors.text,
        },
        h2: {
            fontSize: 40,
            lineHeight: 48,
            fontFamily: 'Roboto-Bold',
            color: colors.text,
        },
        h3: {
            fontSize: 32,
            lineHeight: 40,
            fontFamily: 'Roboto-Bold',
            color: colors.text,
        },
        h4: {
            fontSize: 24,
            lineHeight: 32,
            fontFamily: 'Roboto-Bold',
            color: colors.text,
        },
        h5: {
            fontSize: 20,
            lineHeight: 24,
            fontFamily: 'Roboto-Bold',
            color: colors.text,
        },
        h6: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Roboto-Bold',
            color: colors.text,
        },
        subtitle1: {
            fontSize: 16,
            lineHeight: 20,
            fontFamily: 'Roboto-Regular',
            color: colors.text_light,
        },
        subtitle2: {
            fontSize: 14,
            lineHeight: 18,
            fontFamily: 'Roboto-Regular',
            color: colors.text_light,
        },
        body1: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Roboto-Medium',
            color: colors.text,
        },
        body2: {
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Roboto-Medium',
            color: colors.text,
        },
        button: {
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Roboto-Medium',
            color: colors.text,
        },
        overline: {
            fontSize: 10,
            lineHeight: 14,
            fontFamily: 'Roboto-Regular',
            color: colors.text,
        },
    });
};
