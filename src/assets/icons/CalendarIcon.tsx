import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number,
    height?: number,
    color?: string,
}

export const CalendarIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || 18} height={height || 18} viewBox="0 0 18 18">
        <Path
            stroke={color || "#64748B"}
            fill={'none'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.133}
            d="M14.25 3H3.75a1.5 1.5 0 0 0-1.5 1.5V15a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V4.5a1.5 1.5 0 0 0-1.5-1.5Z"
        />
        <Path
            fill={'none'}
            stroke={color || "#64748B"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M12 1.5v3M6 1.5v3M2.25 7.5h13.5"
        />
    </Svg>
);
