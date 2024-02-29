import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
        },
        button: {
            height: 44,
            width: 44,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return styles;
}
