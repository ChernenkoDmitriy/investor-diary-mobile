import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flexDirection: 'row',
            height: 80,
            alignItems: 'center'
        },
        block: {
            flex: 1,
            marginRight: 10,
        },
        flexRow: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        flexRowEnd: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        iconWrapper: {
            paddingHorizontal: 5,
        },
        image: {
            width: 30,
            height: 30,
            borderRadius: 30,
            marginRight: 10,
        },
    });
    return styles;
}
