import { IRequester } from ".";
import { userModel } from "../../entities/user/UserModel";

class FetchRequester implements IRequester {

    private getHeaders = (headers?: object) => {
        const result: any = {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        };
        if (userModel.token) {
            result['Authorization'] = `Bearer ${userModel.token}`;
        }
        if (headers) {
            Object.assign(result, headers);
        }
        return result;
    }

    postFormData = async (url: string, data: FormData) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Accept': '*/*', 'Content-Type': 'multipart/form-data', 'authorization': `Bearer ${userModel?.token}` },
                body: data,
            });
            const result = await response.json()
            return { data: result, status: response.status };
        } catch (error: any) {
            console.warn('FetchRequester -> postFormData: ', error);
            return error?.response || {};
        }
    }

    post = async (url: string, body?: object, headers?: object): Promise<any> => {
        try {
            const config: RequestInit = {
                method: 'POST',
                headers: this.getHeaders(headers),
                body: body ? JSON.stringify(body) : undefined,
            };
            const response = await fetch(url, config);
            const result = await response.json();
            return this.processingResponse({ data: result, status: response.status });
        } catch (error: any) {
            console.warn('FetchRequester -> post: ', error);
            return error?.response || {};
        }
    }

    delete = async (url: string, body?: object, headers?: object): Promise<any> => {
        try {
            const config: RequestInit = {
                method: 'DELETE',
                headers: this.getHeaders(headers),
                body: body ? JSON.stringify(body) : undefined,
            };
            const response = await fetch(url, config);
            const result = await response.json();
            return this.processingResponse({ data: result, status: response.status });
        } catch (error: any) {
            console.warn('FetchRequester -> post: ', error);
            return error?.response || {};
        }
    }

    put = async (url: string, body?: object, headers?: object): Promise<any> => {
        try {
            const config: RequestInit = {
                method: 'PUT',
                headers: this.getHeaders(headers),
                body: body ? JSON.stringify(body) : undefined,
            };
            const response = await fetch(url, config);
            const result = await response.json();
            return this.processingResponse({ data: result, status: response.status });
        } catch (error: any) {
            console.warn('FetchRequester -> post: ', error);
            return error?.response || {};
        }
    }

    get = async (url: string, headers?: object): Promise<any> => {
        try {
            const config: RequestInit = {
                method: 'GET',
                headers: this.getHeaders(headers),
            };
            const response = await fetch(url, config);
            const result = await response.json();
            return this.processingResponse({ data: result, status: response.status });
        } catch (error: any) {
            console.warn('FetchRequester -> get: ', error);
            return error?.response || {};
        }
    }

    private processingResponse = (response: any) => {
        let result: any = { isError: true, message: '' };
        if (response?.status < 400) {
            result = { isError: false, data: response.data };
        } else {
            console.error('FetchRequester -> processingResponse: ', JSON.stringify(response, null, ' '));
            result = { isError: true, message: response?.data?.message, };
        }
        return result;
    }

}

export const requester = new FetchRequester();
