export interface IMmSpendingCategory {
    id: number;
    name: string;
    slug: string;
    icon: null | string;
    color: string;
    description: null | string;
    direction: 'expense' | 'income';
}