import React, { FC, memo, useMemo } from 'react';
import { Text, TextProps, } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface IProps extends TextProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline';
    text?: string;
}

export const Typography: FC<IProps> = memo((props) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const type = props.variant || 'body1';
    const propStyle = typeof props.style === 'object' ? props.style : {};

    return (<Text {...props} style={{ ...styles[type], ...propStyle }} >{props.text}</Text>)
})
