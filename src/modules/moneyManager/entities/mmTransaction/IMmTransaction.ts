export interface IMmTransaction {
    id: number;
    amount: number;
    currency: string | null;
    comment: string | null;
    date: string;
    direction: 'income' | 'expense';
    category?: { name: string | null; id: number; };
    source?: { name: string | null; id: number; };
}