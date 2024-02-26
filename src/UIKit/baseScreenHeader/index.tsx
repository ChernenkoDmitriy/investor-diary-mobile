import React, { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { getStyles } from './styles';
import { useUiContext } from '../../UIProvider';
import { ArrowBackIcon } from '../../assets/icons/ArrowBackIcon';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface IProps {
    children: React.ReactNode | React.ReactNode[];
    backEnabled?: boolean;
}

export const BaseScreenHeader: FC<IProps> = ({ children, backEnabled }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <View style={styles.container} >
            {backEnabled ? <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
                <ArrowBackIcon />
            </TouchableOpacity> : null}
            {children}
        </View>
    );
};
