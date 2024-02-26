import { userModel } from "../../../entities/user/UserModel";
import { userService } from "../../../entities/user/UserService";
import { IResponse } from "../../../libs/requester/IRequester/IResponse";

export const signUpUseCase = async (phone: string, first_name: string, last_name: string, password: string): Promise<IResponse<any>> => {
    try {
        const { data, isError, message } = await userService.signUp({ phone, first_name, last_name, password });
        if (!isError) {
            userModel.token = data.token;
            userModel.user = data.user;
        }
        return { isError, message, data };
    } catch (error) {
        console.warn('signUpUseCase: ', error);
        return { isError: true, message: '', data: null };
    }
}
