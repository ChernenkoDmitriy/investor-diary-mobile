import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { scaleHorizontal, scaleVertical } from '../../../../../utils';

export const getStyles = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: scaleVertical(380),
            backgroundColor: colors.card,
            marginHorizontal: scaleHorizontal(20),
            borderRadius: 8,
            padding: scaleHorizontal(16),
        },
    });
    return styles;
}