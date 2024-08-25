import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { scaleHorizontal, scaleVertical } from '../../../../../utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        card: {
            width: scaleHorizontal(158),
            height: scaleVertical(248),
            marginBottom: scaleVertical(16),
            backgroundColor: colors.icon_light,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
        },
        contentContainer: {
            paddingVertical: scaleVertical(16),
            paddingHorizontal: scaleHorizontal(20),
            flexGrow: 1,
        },
        columnWrapper: {
            justifyContent: 'space-between',
        }
    });
    return styles;
};