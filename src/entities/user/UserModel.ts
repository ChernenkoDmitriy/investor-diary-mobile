import { IStorage, storage } from "../../libs/storage";
import { MobXRepository } from "../../repository/MobXRepository"
import { IUser } from "./IUser";

export interface IUserModel {
    token: string | null;
    user: IUser | null;
    clear: () => void;
}

class UserModel implements IUserModel {
    private tokenRepository = new MobXRepository<string | null>(null);
    private userRepository = new MobXRepository<IUser | null>(null);

    constructor(private storage: IStorage) {
        this.load();
    }

    private load = () => {
        this.storage.get('STORAGE_USER')
            .then(data => { data && this.userRepository.save(data); })
            .catch(error => console.warn('UserModel -> loadUser: ', error));
        this.storage.get('STORAGE_TOKEN')
            .then(data => { if (data) this.token = data; })
            .catch(error => console.warn('UserModel -> loadUser: ', error));
    }

    private persistUser = (data: IUser | null) => {
        if (data) {
            this.storage.set('STORAGE_USER', data);
        } else {
            this.storage.remove('STORAGE_USER');
        }
    }

    private persistToken = (data: string | null) => {
        if (data) {
            this.storage.set('STORAGE_TOKEN', data);
        } else {
            this.storage.remove('STORAGE_TOKEN');
        }
    }

    public get token() {
        return this.tokenRepository.data;
    }

    public set token(token: string | null) {
        this.tokenRepository.save(token);
        this.persistToken(token);
    }

    public get user() {
        return this.userRepository.data;
    }

    public set user(user: IUser | null) {
        this.userRepository.save(user);
        this.persistUser(user);
    }

    public clear() {
        this.user = null;
        this.token = null;
    }

}

export const userModel = new UserModel(storage);
