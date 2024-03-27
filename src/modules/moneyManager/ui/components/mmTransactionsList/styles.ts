import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {

        },
        title: {
            marginHorizontal: 16,
            marginTop: 16,
        },
    });
    return styles;
}
