import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { initialWindowMetrics } from 'react-native-safe-area-context';

export const getStyles = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            paddingTop: initialWindowMetrics?.insets?.top || 0,
            alignItems: 'center',
            backgroundColor: colors.card,
        },
        topContainer: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        backButton: {
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        editButton: {
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
        },
        edit: {
            fontSize: 16,
            fontFamily: 'Roboto-Medium',
            color: colors.primary,
        },
        textContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 32,
            transform: [{ translateY: -15 }],
        },
        title: {
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            color: colors.text,
        },
        members: {
            marginTop: 4,
            fontSize: 12,
            fontFamily: 'Roboto-Regular',
            color: colors.text,
        }
    });
    return styles;
}