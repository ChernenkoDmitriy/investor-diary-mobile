export interface ILinks {
    signIn: string;
    signUp: string;
    profile: string;
    user: string;
    userAvatar: string;
    investments: string;
    exchangeRates: string;
}

class Links {
    private dev = 'https://nmau.pp.ua/api';
    private _domain = this.dev;
    private _links = {
        readFiles: `${this._domain}/read-files`,

        signIn: `${this._domain}/auth-password/login`,
        signUp: `${this._domain}/auth-password/registration`,
        profile: `${this._domain}/users/profile`,
        user: `${this._domain}/users`,
        userAvatar: `${this._domain}/users/set-avatar`,

        investments: `${this._domain}/investments`,
        exchangeRates: `${this._domain}/exchange-rates`,

    }

    public get signIn() { return this._links.signIn; }
    public get signUp() { return this._links.signUp; }
    public get profile() { return this._links.profile; }
    public get user() { return this._links.user; }
    public get userAvatar() { return this._links.userAvatar; }
    public get investments() { return this._links.investments; }
    public get exchangeRates() { return this._links.exchangeRates; }

}

export const links = new Links();