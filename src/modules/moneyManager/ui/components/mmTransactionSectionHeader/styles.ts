import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { scaleVertical } from '../../../../../utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: scaleVertical(40),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background,
        },
        title: {
            marginHorizontal: 16,
        },
    });
    return styles;
}
