import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const BanknoteIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || 24} height={height || 24} viewBox="0 0 122.88 72.38"  >
            <Path
                d="M13.3 0h109.58v56.85l-7.33 1.06-.78-41.48v-.54a7.74 7.74 0 0 0-7.31-7.32h-94L13.3 0Zm95.8 15.53v56.85H0V15.53ZM44.8 38.36a12.92 12.92 0 1 1 5.79 17.34 12.92 12.92 0 0 1-5.79-17.34ZM18.41 23.92l72.12.53a8.41 8.41 0 0 0 8.52 8.27l.34 22.48a8.4 8.4 0 0 0-8.26 8.53L19 63.2a8.41 8.41 0 0 0-8.53-8.27l-.34-22.48a8.43 8.43 0 0 0 8.3-8.53Z"
                fill={color || '#000'}
            />
        </Svg>
    )
}
