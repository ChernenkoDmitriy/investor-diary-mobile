import { userService } from "../../../entities/user/UserService";
import { ICropedImage } from "../../../libs/imagePicker/IImagePicker/ICropedImage";

export const onChangeUserLogoUseCase = async (value: ICropedImage) => {
    try {
        const formData = new FormData();
        // @ts-ignore
        // formData.append('avatar', { name: value.filename || 'photo.jpeg', type: 'image/jpeg', uri: value.path });
        // await userService.updateAvatar(formData);
        // await userService.getUser();
    } catch (error) {
        console.warn('onChangeUserLogoUseCase: ', error);
    }
}