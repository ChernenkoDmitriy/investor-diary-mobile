import { userModel } from "../../../entities/user/UserModel";
import { userService } from "../../../entities/user/UserService";
import { UserSignInDto } from "../../../entities/user/dto/user-sign-in.dto";

export const signInUseCase = async ({ phone, password }: UserSignInDto) => {
    try {
        const { data, isError, message } = await userService.signIn({ phone, password });
        if (!isError) {
            userModel.token = data.token;
            userModel.user = data.user;
        }
        return { isError, message };
    } catch (error) {
        console.warn('signInUseCase: ', error);
        return { isError: true, message: '', data: null };
    }
};
