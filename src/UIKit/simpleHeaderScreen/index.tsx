import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../UIProvider';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BaseScreenHeader } from '../baseScreenHeader';

interface IProps {
    title?: string;
    children?: React.ReactNode | React.ReactNode[];
}

export const SimpleHeaderScreen: FC<IProps> = ({ children, title }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <BaseScreenHeader backEnabled >
            <View style={styles.titleContainer}>
                {!!title && <TouchableOpacity style={styles.titleContainerButton} >
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                </TouchableOpacity>}
            </View>
            {children}
        </BaseScreenHeader>
    );
};
