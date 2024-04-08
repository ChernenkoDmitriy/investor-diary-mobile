import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme/IColors';
import { scaleHorizontal, scaleVertical } from '../../../../../utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        button:{
            height: scaleVertical(40),
            width: scaleHorizontal(40),
            justifyContent: 'center',
            alignItems: 'center',
        },
        modal: {
            flex: 1,
            margin: 0,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
        },
        container: {
            alignItems: 'center',
            backgroundColor: colors.background,
            borderRadius: 8,
            padding: 10,
            height: scaleVertical(370),
        },
        calendar: {
            width: scaleHorizontal(261),
            backgroundColor: colors.background,
        }
    });
    return styles;
}
