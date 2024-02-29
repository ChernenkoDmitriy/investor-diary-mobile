import { StyleSheet } from 'react-native'; 
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            width: '100%',
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 16,
        },
        button: {
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        titleContainer: {
            flex: 1,
            justifyContent: 'center',
        },
        title: {
            fontSize: 18,
            fontFamily: 'Roboto-Regular',
            color: colors.text_middle,
        },
    });
    return styles;
}