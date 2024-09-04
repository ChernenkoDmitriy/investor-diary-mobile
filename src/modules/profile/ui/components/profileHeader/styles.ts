import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { scaleVertical } from '../../../../../utils';

export const getStyles = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            paddingTop: initialWindowMetrics?.insets?.top || 0,
            paddingBottom: scaleVertical(48),
            width: '100%',
            backgroundColor: colors.primary,
            alignItems: 'center',
        },
        textWrapper: {
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: scaleVertical(16),
        },
        text: {
            color: colors.text_inverted,
        }
    });
    return styles;
}