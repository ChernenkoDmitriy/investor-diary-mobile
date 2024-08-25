import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/theme/IColors';
import { scaleHorizontal, scaleVertical } from '../../../../utils';

export const getStyles = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
        },
        contentContainer: {
            paddingVertical: scaleVertical(16),
            paddingHorizontal: scaleHorizontal(20),
            flexGrow: 1,
        }, 
    });
    return styles;
}