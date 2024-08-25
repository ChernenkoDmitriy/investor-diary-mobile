import { ILinks, links } from "../../Links";
import { IRequester, requester } from "../../libs/requester";
import { IResponse } from "../../libs/requester/IRequester/IResponse";
import { IUser } from "./IUser";
import { userModel } from "./UserModel";
import { UserSignInDto } from "./dto/user-sign-in.dto";
import { UserSignUpDto } from "./dto/user-sign-up.dto";

class UserService {
    constructor(
        private requester: IRequester,
        private links: ILinks,
    ) { }

    signIn = async (body: UserSignInDto): Promise<IResponse<{ user: IUser; accessToken: string; }>> => {
        try {
            const response = await this.requester.post(this.links.signIn, body);
            return response;
        } catch (error) {
            console.warn('UserService -> signIn: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    signUp = async (body: UserSignUpDto): Promise<IResponse<{ user: IUser; accessToken: string; }>> => {
        try {
            const response = await this.requester.post(this.links.signUp, body);
            return response;
        } catch (error) {
            console.warn('UserService -> signUp: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    profile = async (): Promise<IResponse<IUser>> => {
        try {
            const url = this.links.user + '/' + userModel.user?.id;
            const response = await this.requester.get(url);
            if (!response.isError && response.data) {
                userModel.user = response.data;
            }
            return response;
        } catch (error) {
            console.warn('UserService -> getUser: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

}

export const userService = new UserService(requester, links);
