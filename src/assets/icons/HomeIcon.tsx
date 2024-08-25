import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const HomeIcon: FC<IProps> = ({ width, height, color }) => {
    return (
        <Svg width={width || 44} height={height || 44} viewBox="0 0 44 44"  >
            <Path
                fill={color || "#000000"}
                fillRule="evenodd"
                d="M12.389 19.156a1 1 0 0 0-.389.791V31a1 1 0 0 0 1 1h6v-7.684a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V32h6a1 1 0 0 0 1-1V19.947a1 1 0 0 0-.389-.791l-9-6.948a1 1 0 0 0-1.222 0l-9 6.948Z"
                clipRule="evenodd"
            />
        </Svg>
    )
}
