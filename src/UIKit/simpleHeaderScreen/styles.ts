import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({ 
        contentWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        titleContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        titleContainerButton: {
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        title: {
            fontSize: 22,
            lineHeight: 26,
            color: colors.text,
            fontFamily: 'Roboto-Medium'
        },
    });
    return styles;
}
