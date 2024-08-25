import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { scaleVertical } from '../../../../../utils';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginBottom: scaleVertical(16),
            zIndex: 10
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
        },
        infoButton: {
            height: 44,
            width: 44,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    return styles;
}
