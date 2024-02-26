import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyles = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 50 + (initialWindowMetrics?.insets?.top || 0),
            paddingTop: initialWindowMetrics?.insets?.top || 0,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
        },
        backButton: {
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return styles;
}