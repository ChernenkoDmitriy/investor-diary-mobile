import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../../utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            backgroundColor: colors.card,
            borderRadius: 8,
            marginBottom: scaleVertical(16),
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.1,
            overflow: 'hidden',
        },
        indicator: {
            width: 6,
            height: '100%',
            backgroundColor: colors.primary,
        },
        infoContainer: {
            paddingHorizontal: scaleHorizontal(12),
            paddingVertical: scaleVertical(8),
        }
    });
    return styles;
}
