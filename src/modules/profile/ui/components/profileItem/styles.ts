import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyles = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            paddingLeft: 16,
            height: 42,
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
            
            height: 36,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            justifyContent: 'center',
        },
        title: {
            color: colors.text,
            fontFamily: 'Roboto-Regular',
        },
    });
    return styles;
}