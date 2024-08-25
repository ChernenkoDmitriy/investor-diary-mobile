export interface IFormDataRequest {
    formData: (url: string, body: FormData, method?: 'POST' | 'PATCH') => Promise<any>;
}