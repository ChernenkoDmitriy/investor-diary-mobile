export interface IInvestment {
    id: number;
    name: string;
    currency: string;
    icon: string;
    ticker: string;
    comment: string;
    broker: string;
    enteringPrice: number;
    enteringDate: string;
    amount: number;
    type: '',
    sector: '',
}

export type StockSector = '';