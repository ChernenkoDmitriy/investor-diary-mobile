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
    type: TInvestmentType,
    sector: TSector,
}

export type TSector = 'Technology' | 'Finance' | 'Healthcare' | 'Consumer Cyclical' | 'Industrial' | 'Communication Services' | 'Consumer Defensive' | 'Energy' | 'Basic Materials' | 'Real Estate' | 'Utilities';
export type TInvestmentType = 'Index' | 'Stock' | 'ETF' | 'Bond' | 'Crypto' | 'Currency' | 'Commodity' | 'Obligation' | 'Deposit' | 'Cash';
