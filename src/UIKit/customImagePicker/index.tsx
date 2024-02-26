import React, { FC, memo, useCallback, useMemo } from 'react';
import { TouchableOpacity, ViewStyle, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ICropedImage } from '../../libs/imagePicker/IImagePicker/ICropedImage';
import { imagePicker } from '../../libs/imagePicker/RNImageCropPicker';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import { CameraIcon } from '../../assets/icons/CameraIcon';

interface IProps {
    image: string | null | undefined;
    onSaveLogo?: (value: ICropedImage) => void;
    cropping?: boolean;
    containerStyle?: ViewStyle;
}

export const CustomImagePicker: FC<IProps> = memo(({ image, cropping, onSaveLogo, containerStyle = {} }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPickImage = useCallback(() => {
        imagePicker.onOpenPicker({ cropping }).then(newImage => newImage && onSaveLogo?.(newImage as any));
    }, []);

    return (
        <TouchableOpacity onPress={onPickImage} disabled={!onSaveLogo} style={[styles.container, containerStyle]} >
            {image
                ? <FastImage source={{ uri: image, priority: FastImage.priority.high, }} resizeMode={'cover'} style={styles.logo} />
                : <CameraIcon width={80} height={80} color={colors.background} />}
        </TouchableOpacity>
    )

});
