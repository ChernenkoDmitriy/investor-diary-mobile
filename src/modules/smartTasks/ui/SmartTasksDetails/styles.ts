import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/theme/IColors';
import { scaleHorizontal } from '../../../../utils';

export const getStyles = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: scaleHorizontal(20),
            paddingTop: 16,
        },
    });
    return styles;
}
