import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IProps {
    width?: number,
    height?: number,
    color?: string,
}

export const TargetIcon: FC<IProps> = ({ width, height, color }) => {
    return (
        <Svg width={width || 24} height={height || 24} viewBox="0 0 122 120" fill="none">
            <Path fill={color || '#000000'} d="M59.927 0h.009v.002a59.91 59.91 0 0 1 16.99 2.446 59.639 59.639 0 0 1 15.096 6.865.587.587 0 0 1 .122.886l-4.288 5.498a.584.584 0 0 1-.788.125l-.01-.006a51.661 51.661 0 0 0-6.922-3.578l-.002-.001v.001a51.616 51.616 0 0 0-20.208-4.09h-.006v-.002a51.616 51.616 0 0 0-23.127 5.442 51.92 51.92 0 0 0-13.48 9.726l-.004.004-.027.025a51.967 51.967 0 0 0-6.954 8.637c-5.177 8.06-8.181 17.652-8.181 27.946v.006h-.002a51.616 51.616 0 0 0 5.442 23.127 51.916 51.916 0 0 0 9.727 13.48l.004.004.022.023a51.87 51.87 0 0 0 8.641 6.957c8.06 5.177 17.653 8.181 27.946 8.181h.006v.003a51.626 51.626 0 0 0 23.127-5.442 51.902 51.902 0 0 0 13.48-9.726l.005-.005.03-.029a51.873 51.873 0 0 0 6.95-8.633c5.178-8.06 8.181-17.652 8.181-27.945v-.01h.003a51.845 51.845 0 0 0-2.056-14.483 51.576 51.576 0 0 0-3.814-9.478.582.582 0 0 1 .172-.741l5.541-4.381a.581.581 0 0 1 .864.166h.002l.004.008.006.012h.001a59.445 59.445 0 0 1 3.481 7.49 59.779 59.779 0 0 1 3.943 21.418v.006h-.002a59.742 59.742 0 0 1-6.299 26.764 60.102 60.102 0 0 1-11.251 15.604l-.004.004-.022.02a60.169 60.169 0 0 1-10.005 8.057c-9.33 5.992-20.433 9.471-32.344 9.471h-.006v-.002a59.742 59.742 0 0 1-23.321-4.711 60.116 60.116 0 0 1-19.048-12.839l-.004-.005-.028-.029a60.133 60.133 0 0 1-8.048-9.997C3.479 82.939 0 71.837 0 59.927v-.007h.002a59.763 59.763 0 0 1 4.71-23.321 60.11 60.11 0 0 1 12.839-19.047l.004-.004.026-.023a60.225 60.225 0 0 1 10.001-8.052C36.915 3.478 48.017 0 59.927 0zm33.14 16.299L109.837.275l1.117 10.807 11.926 1.491-17.958 17.401-8.738.75-34.868 32.43-3.213-2.767 33.027-34.5 1.937-9.588zm-33.14 24.659h.015v.002a19.04 19.04 0 0 1 3.8.384h.003c.88.18 1.742.423 2.579.723a.582.582 0 0 1 .263.908l.001.001-4.681 6.004a.583.583 0 0 1-.538.218v.002l-.027-.004v.001l-.208-.025-.018-.003-.18-.019-.015-.002a11.523 11.523 0 0 0-.994-.042h-.006v-.003a10.793 10.793 0 0 0-7.645 3.172l-.004.004-.027.024a10.882 10.882 0 0 0-1.432 1.786 10.77 10.77 0 0 0-1.706 5.837v.006h-.003a10.782 10.782 0 0 0 3.172 7.644l.004.005.024.025a10.877 10.877 0 0 0 1.786 1.434 10.784 10.784 0 0 0 5.837 1.706h.006v.002a10.76 10.76 0 0 0 7.644-3.172l.005-.005.02-.019a10.48 10.48 0 0 0 .827-.933 10.787 10.787 0 0 0 1.621-2.861.574.574 0 0 1 .227-.284l7.564-5.982a.582.582 0 0 1 .94.393h.003l.005.045.002.031.024.25v.007h.002l.022.272v.005c.035.48.055.957.055 1.431v.006h-.003a18.923 18.923 0 0 1-1.994 8.469 19.029 19.029 0 0 1-3.56 4.938l-.004.004-.032.027c-.472.47-.968.917-1.485 1.334a18.884 18.884 0 0 1-11.89 4.19h-.006v-.003a18.914 18.914 0 0 1-13.406-5.553l-.004-.004-.033-.036a19.21 19.21 0 0 1-2.522-3.138 18.88 18.88 0 0 1-2.997-10.233v-.007h.002a18.931 18.931 0 0 1 1.994-8.467 19.03 19.03 0 0 1 3.559-4.936l.001-.001-.001-.001.004-.004a19.258 19.258 0 0 1 3.174-2.555 18.893 18.893 0 0 1 10.236-2.998zm.993 8.19a.587.587 0 0 1-.512-.618l.512.618zm-.993-28.838h.01v.002a39.676 39.676 0 0 1 11.82 1.797 39.315 39.315 0 0 1 7.661 3.323c.28.159.379.516.22.796-.015.024-.03.049-.048.071l-.003.003-4.344 5.572a.587.587 0 0 1-.753.147l-.014-.007a31.8 31.8 0 0 0-3.769-1.663 31.386 31.386 0 0 0-10.781-1.895h-.006v-.002a31.376 31.376 0 0 0-14.055 3.31l-.046.021a31.599 31.599 0 0 0-8.146 5.888l-.004.004-.023.023a31.662 31.662 0 0 0-4.217 5.243 31.33 31.33 0 0 0-4.97 16.983v.006h-.002a31.372 31.372 0 0 0 3.308 14.055 31.558 31.558 0 0 0 5.911 8.191l.004.004a31.295 31.295 0 0 0 5.265 4.243 31.325 31.325 0 0 0 16.983 4.97h.006v.002a31.38 31.38 0 0 0 14.056-3.308 31.534 31.534 0 0 0 8.191-5.911l.004-.004a31.468 31.468 0 0 0 4.243-5.266A31.32 31.32 0 0 0 91.4 59.926h-.002v-.015h.002a31.594 31.594 0 0 0-.696-6.59 31.216 31.216 0 0 0-1.303-4.456.584.584 0 0 1 .217-.687l5.663-4.478a.581.581 0 0 1 .891.216h.001l.004.01.004.008.001-.001a40.416 40.416 0 0 1 1.584 4.229 39.6 39.6 0 0 1 1.778 11.763v.006h-.003a39.478 39.478 0 0 1-4.164 17.692 39.686 39.686 0 0 1-7.437 10.314l-.005.004-.022.021a39.513 39.513 0 0 1-6.606 5.318 39.442 39.442 0 0 1-21.381 6.261h-.006v-.001a39.504 39.504 0 0 1-15.416-3.113 39.748 39.748 0 0 1-12.592-8.488l-.004-.004-.028-.03a39.734 39.734 0 0 1-5.311-6.599 39.438 39.438 0 0 1-6.261-21.38v-.006h.002a39.506 39.506 0 0 1 4.165-17.693 39.733 39.733 0 0 1 7.436-10.312l.001-.001-.001-.001.004-.004.026-.024a39.6 39.6 0 0 1 6.602-5.314 39.46 39.46 0 0 1 21.384-6.261z" />
        </Svg>
    )
};