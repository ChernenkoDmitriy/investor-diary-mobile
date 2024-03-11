import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';

export const getStyle = (_colors: IColors) => {
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            paddingHorizontal: 16,
            marginVertical: 16,
            alignItems: 'center',
        },
        legendContainer: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 10,
        },
        legendItem: {
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
        },
        legendColor: {
            width: 10,
            height: 10,
            borderRadius: 5,
            marginRight: 8,
        },
        legendTextContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        }
    });
}
