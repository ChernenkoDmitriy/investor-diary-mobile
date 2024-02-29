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

    signIn = async (body: UserSignInDto): Promise<IResponse<{ user: IUser; token: string; }>> => {
        try {
            console.log('this.links.signIn: ', this.links.signIn);
            console.log('body: ', body);
            const response = await this.requester.post(this.links.signIn, body);
            return response;
        } catch (error) {
            console.warn('UserService -> signIn: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    signUp = async (body: UserSignUpDto): Promise<IResponse<{ user: IUser; token: string; }>> => {
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
            const response = await this.requester.get(this.links.profile);
            if (!response.isError && response.data) {
                userModel.user = response.data;
            }
            return response;
        } catch (error) {
            console.warn('UserService -> getUser: ', error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    updateAvatar = async (formData: FormData): Promise<IResponse<any>> => {
        try {
            const response = await this.requester.postFormData(this.links.userAvatar, formData);
            if (!response.isError && response.data) {
                userModel.user = response.data;
            }
            return response;
        } catch (error) {
            console.error('MetadialogService -> create: ', error);
            return null as any;
        }
    }

}

export const userService = new UserService(requester, links);
