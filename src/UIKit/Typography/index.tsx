import React, { FC, memo, useMemo } from 'react';
import { Text, TextProps, } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface IProps extends TextProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline';
    text?: string;
}

export const Typography: FC<IProps> = memo(({ variant = 'body1', text, ...props }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (<Text {...props} style={[styles[variant], props.style]} >{text}</Text>)
})
