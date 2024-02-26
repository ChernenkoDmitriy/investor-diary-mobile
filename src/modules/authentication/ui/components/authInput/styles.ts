import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            marginBottom: 15,
            borderWidth: 1,
            height: 40,
            borderRadius: 8,
        },
        input: {
            flex: 1,
            fontSize: 16,
            lineHeight: 19,
            color: colors.text,
            padding: 0,
            paddingHorizontal: 10,
        }
    });
    return styles;
}
