import { userModel } from "../../../entities/user/UserModel";
import { userService } from "../../../entities/user/UserService";
import { IResponse } from "../../../libs/requester/IRequester/IResponse";
import { SHA256 } from "../../../libs/sha256";

export const signUpUseCase = async (phone: string, first_name: string, last_name: string, password: string): Promise<IResponse<any>> => {
    try {
        const hashPassword = SHA256(password);
        const { data, isError, message } = await userService.signUp({ phone, first_name, last_name, password: hashPassword });
        if (!isError) {
            userModel.token = data.accessToken;
            userModel.user = data.user;
        }
        return { isError, message, data };
    } catch (error) {
        console.warn('signUpUseCase: ', error);
        return { isError: true, message: '', data: null };
    }
}
