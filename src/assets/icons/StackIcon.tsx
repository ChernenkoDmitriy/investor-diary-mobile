import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IProps {
    width?: number,
    height?: number,
    color?: string,
}

export const StackIcon: FC<IProps> = ({ width, height, color }) => {
    return (
        <Svg width={width || 24} height={height || 24} viewBox="0 0 122 111" fill="none">
            <Path fill={color || '#000000'} d="M61.15 0 0 26.52l61.41 24.96 61.47-24.88L61.15 0zm61.73 57.12L95.46 45.31 62.73 58.56c-.88.36-1.83.33-2.65 0L27.27 45.22 0 57.05 61.41 82l61.47-24.88zM96.14 75.56 62.73 89.08c-.88.36-1.83.33-2.65 0L26.59 75.47 0 87.01l61.41 24.96 61.47-24.88-26.74-11.53z" />
        </Svg>
    )
};
