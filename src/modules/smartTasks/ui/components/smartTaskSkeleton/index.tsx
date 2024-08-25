import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { FlatList, StyleProp, View, ViewStyle } from 'react-native';
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../UIProvider';

interface IProps {
    count?: number;
    scrollEnabled?: boolean;
    contentContainerStyle?: StyleProp<ViewStyle>
}

export const SmartTaskSkeleton: FC<IProps> = ({ count = 1, scrollEnabled = true, contentContainerStyle }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const opacity = useSharedValue(1);

    useEffect(() => {
        opacity.value = withRepeat(withTiming(0.4, { duration: 1200 }), -1, true);
    }, []);

    const animatedStyles = useAnimatedStyle(() => {
        return { opacity: opacity.value };
    });

    const renderItem = useCallback(() =>
        <Animated.View entering={FadeIn} exiting={FadeOut}  >
            <Animated.View style={[styles.card, animatedStyles]} >
            </Animated.View>
        </Animated.View>
        , []);

    const keyExtractor = useCallback((_: string, index: number) => `${index}`, []);

    return (
        <FlatList
            scrollEnabled={scrollEnabled}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            data={new Array(count).fill('1')}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
}; 
