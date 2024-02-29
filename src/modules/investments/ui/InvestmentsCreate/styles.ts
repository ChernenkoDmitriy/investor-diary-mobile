import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/theme/IColors';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 16,
        },
        doubleViewInputs: {
            flexDirection: 'row',
            width: '100%',
        },
        input: {
            flex: 1
        },
        inputMarginRight: {
            marginRight: 12,
            flex: 1,
        }
    });
    return styles;
}
