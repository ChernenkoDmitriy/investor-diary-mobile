import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyles = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            backgroundColor: colors.card,
            flexDirection: 'row',
            padding: 16,
        },
        textWrapper:{
            paddingLeft: 16,
            justifyContent: 'center',
        }, 
    });
    return styles;
}