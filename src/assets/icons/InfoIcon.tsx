import React, { FC } from 'react';
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const InfoIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || 16} height={height || 16} fill="none" viewBox="0 0 16 16" >
        <G
            stroke={color || "#fff"}
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath="url(#a)"
        >
            <Path
                strokeWidth={1.133}
                d="M8 14.667A6.667 6.667 0 1 0 8 1.334a6.667 6.667 0 0 0 0 13.333ZM8 10.667V8"
            />
            <Path strokeWidth={1.333} d="M8 5.333h.007" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill={color || "#fff"} d="M0 0h16v16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);