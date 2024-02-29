export interface ILinks {
    signIn: string;
    signUp: string;
    profile: string;
    user: string;
    userAvatar: string;
    investments: string;
}

class Links {
    private local = 'http://localhost:4002/healthhabits';
    private dev = 'https://nmau.pp.ua/healthhabits';
    private _domain = this.local;
    private _links = {
        readFiles: `${this._domain}/read-files`,

        signIn: `${this._domain}/authentication/sign-in`,
        signUp: `${this._domain}/authentication/sign-up`,
        profile: `${this._domain}/users/profile`,
        user: `${this._domain}/users`,
        userAvatar: `${this._domain}/users/set-avatar`,

        investments: `${this._domain}/investments`,

    }

    public get signIn() { return this._links.signIn; }
    public get signUp() { return this._links.signUp; }
    public get profile() { return this._links.profile; }
    public get user() { return this._links.user; }
    public get userAvatar() { return this._links.userAvatar; }
    public get investments() { return this._links.investments; }

}

export const links = new Links();