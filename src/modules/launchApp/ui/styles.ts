import { StyleSheet } from 'react-native';
import { IColors } from '../../../UIProvider/theme/IColors';

export const getStyles = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontFamily: 'Roboto-Regular',
            fontSize: 24,
        }
    });
    return styles;
}