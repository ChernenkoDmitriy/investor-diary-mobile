import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';
import { scaleHorizontal, scaleVertical } from '../../utils';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginBottom: scaleVertical(8),
            alignSelf: 'center',
            paddingHorizontal: scaleHorizontal(16),
        },
        titleContainer: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
        },
        containerContent: {
            marginTop: scaleVertical(8),
            overflow: 'hidden'
        },
        textContainer: {
            flex: 1,
            height: scaleVertical(32),
            marginHorizontal: 10,
            paddingVertical: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        chevronContainer: {
            height: 32,
            width: 32,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return styles;
}
