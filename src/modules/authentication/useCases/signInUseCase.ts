import { userModel } from "../../../entities/user/UserModel";
import { userService } from "../../../entities/user/UserService";
import { UserSignInDto } from "../../../entities/user/dto/user-sign-in.dto";
import { SHA256 } from "../../../libs/sha256";

export const signInUseCase = async ({ phone, password }: UserSignInDto) => {
    try {
        const hashPassword = SHA256(password);
        const { data, isError, message } = await userService.signIn({ login: phone, password: hashPassword });
        if (!isError) {
            userModel.token = data.accessToken;
            userModel.user = data.user;
        }
        return { isError, message };
    } catch (error) {
        console.warn('signInUseCase: ', error);
        return { isError: true, message: '', data: null };
    }
};
