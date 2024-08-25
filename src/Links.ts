export interface ILinks {
    signIn: string;
    signUp: string;
    user: string;
    investments: string;
    exchangeRates: string;
    smartTasks: string;
    mmTransactions: string;
    mmSpendingCategories: string;
    mmPaymentSources: string;
    sectors: string;
}

class Links {
    private dev = 'https://nmau.pp.ua/api';
    private _domain = this.dev;
    private _links = {
        readFiles: `${this._domain}/read-files`,

        signIn: `${this._domain}/auth-login/sign-in`,
        signUp: `${this._domain}/auth-login/sign-up`,
        user: `${this._domain}/users`,

        investments: `${this._domain}/investments`,
        exchangeRates: `${this._domain}/exchange-rates`,
        sectors: `${this._domain}/investment/sectors`,
        smartTasks: `${this._domain}/smart-tasks`,

        mmTransactions: `${this._domain}/mm-transactions`,
        mmSpendingCategories: `${this._domain}/spending-categories`,
        mmPaymentSources: `${this._domain}/mm-payment-sources`,

    }

    public get signIn() { return this._links.signIn; }
    public get signUp() { return this._links.signUp; }
    public get user() { return this._links.user; }
    public get investments() { return this._links.investments; }
    public get sectors() { return this._links.sectors; }
    public get exchangeRates() { return this._links.exchangeRates; }
    public get mmTransactions() { return this._links.mmTransactions; }
    public get mmSpendingCategories() { return this._links.mmSpendingCategories; }
    public get mmPaymentSources() { return this._links.mmPaymentSources; }
    public get smartTasks() { return this._links.smartTasks; }

}

export const links = new Links();