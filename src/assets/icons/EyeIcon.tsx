import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const EyeIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || '22'}
        height={height || '22'}
        fill="none"
        viewBox="0 0 22 22"
    >
        <Path
            d="M3.328 12.824C4.104 9.096 7.349 6.447 11 6.447c3.65 0 6.895 2.649 7.673 6.377a.57.57 0 0 0 1.115-.232c-.884-4.24-4.584-7.284-8.788-7.284-4.204 0-7.903 3.043-8.788 7.284a.57.57 0 0 0 1.116.232Zm7.66-4.1a3.984 3.984 0 1 1 0 7.968 3.984 3.984 0 0 1 0-7.969Z"
            stroke={color || "#E5E5E5"}
            fill={color || "#E5E5E5"}
        />
    </Svg>
);