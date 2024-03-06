import React, { FC, useCallback, useMemo, useState } from 'react';
import { LayoutAnimation, TouchableOpacity, UIManager, View } from 'react-native';
import Animated, { useSharedValue, withTiming, Easing, useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated';
import { Chevron } from '../../assets/icons/ChevronIcon';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import { Typography } from '../Typography';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

interface IProps {
    title: string;
    rightText?: string;
    children: React.ReactNode[] | React.ReactNode;
}

const ANIMATION_DURATION = 100;

export const Accordion: FC<IProps> = ({ title, rightText, children }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [isOpen, setIsOpen] = useState(true);
    const animatedValue = useSharedValue(1);

    const onOpenClose = useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsOpen(prev => !prev);
        const toValue = isOpen ? 0 : 1;
        animatedValue.value = withTiming(toValue, { duration: ANIMATION_DURATION, easing: Easing.linear, });
    }, [isOpen]);

    const animatedRotate = useAnimatedStyle(() => {
        const rotate = interpolate(animatedValue.value, [0, 1], [0, 180], { extrapolateRight: Extrapolation.CLAMP });
        return { transform: [{ rotate: `${rotate}deg` }] };
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onOpenClose} style={styles.titleContainer}>
                <View style={styles.textContainer}>
                    <Typography variant="h6" text={title} />
                    <Typography variant="h6" text={rightText} />
                </View>
                <Animated.View style={[styles.chevronContainer, animatedRotate]}>
                    <Chevron color={colors.primary} width={32} height={32} />
                </Animated.View>
            </TouchableOpacity>
            <Animated.View style={[styles.containerContent]}>
                {isOpen ? children : null}
            </Animated.View>
        </View>
    );
};
