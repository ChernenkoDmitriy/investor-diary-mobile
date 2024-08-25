export interface ISmartTask {
    id: number;
    name: string;
    specific: 'Deposit' | 'Credit' | 'Dividends' | 'Financial cushion' | 'Other';
    measurable: string;
    achievable: string;
    relevant: string;
    time_bound: number | string;
    currency: string;
    status: 'Active' | 'Inactive' | 'Completed' | 'Canceled' | 'Paused' | 'Failed';
    user_id: number;
    progress_value: number;
    progress_value_percent: number;

}