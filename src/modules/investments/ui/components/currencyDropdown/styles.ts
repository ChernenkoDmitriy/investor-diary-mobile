import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 24,
            zIndex: 20,
        },
    });
    return styles;
}
