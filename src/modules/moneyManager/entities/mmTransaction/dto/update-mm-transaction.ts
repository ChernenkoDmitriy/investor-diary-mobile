export interface IUpdateMmTransaction {
    currency?: string;
    amount?: number;
    direction?: 'income' | 'expense';
    date?: string;
    category_id?: number;
    source_id?: number;
}