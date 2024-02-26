import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            height: 60,
            width: 60,
            borderRadius: 12,
            backgroundColor: colors.card,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        },
        logo: {
            height: 60,
            width: 60,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logoText: {
            fontSize: 16,
            fontFamily: 'Roboto-Medium',
            color: colors.text,
        },
    });
}
