import { IRequester } from "../libs/requester";
import { IResponse } from "../libs/requester/IRequester/IResponse";
// import { toastService } from "../libs/toast";
import { IMobXModel } from "./MobXModel";

export class ApiService<T> {
    constructor(
        private requester: IRequester,
        private link: string,
        private model: IMobXModel<T>
    ) { }

    create = async (body: any): Promise<IResponse<T>> => {
        try {
            const formData = new FormData();
            Object.keys(body).forEach(key => {
                if (key === 'image' && body?.image) {
                    formData.append('image', body.image, body.image.name)
                } else if (body[key] !== null && body[key] !== undefined) {
                    formData.append(key, body[key].toString());
                }
            });
            const response = await this.requester.formData(this.link, formData, 'POST');
            if (response?.isError) {
                // toastService.onError('Some error');
            } else {
                await this.list();
            }
            return response;
        } catch (error) {
            console.warn('ApiService -> create: ', this.link, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    all = async (body?: any): Promise<IResponse<T[]>> => {
        try {
            let url = new URL(this.link);
            if (body) {
                Object.keys(body).forEach(key => url.searchParams.append(key, body[key]));
            }
            const response = await this.requester.get(url.href);
            if (response?.isError) {
                // toastService.onError('Some error');
            } else {
                this.model.all = response.data;
            }
            return response;
        } catch (error) {
            console.warn('ApiService -> list: ', this.link, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    list = async (body?: any): Promise<IResponse<{ rows: T[]; count: number; }>> => {
        try {
            const url = new URL(this.link);
            if (body) {
                Object.keys(body).forEach(key => url.searchParams.append(key, body[key]));
            }
            const response = await this.requester.get(url.href);
            if (response?.isError) {
                // toastService.onError('Some error');
            } else {
                this.model.list = response.data;
            }
            return response;
        } catch (error) {
            console.warn('ApiService -> list: ', this.link, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    update = async (body: any): Promise<IResponse<T>> => {
        try {
            const formData = new FormData();
            Object.keys(body).forEach(key => {
                if (key === 'image' && body?.image && !body.image?.path?.includes('http')) {
                    formData.append('image', body.image, body.image.name)
                } else if (key === 'image' && !body.image?.path?.includes('http')) {
                    formData.append('image', 'null')
                } else if (body[key] !== null && body[key] !== undefined) {
                    formData.append(key, body[key].toString());
                }
            });
            const url = this.link + '/' + body.id;
            const response = await this.requester.formData(url, body, 'PATCH');
            if (response?.isError) {
                // toastService.onError('Some error');
            } else {
                // toastService.onSuccess('Success');
                this.model.current = response.data;
                await this.list();
            }
            return response;
        } catch (error) {
            console.warn('ApiService -> update: ', this.link, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    get = async (id: number | string): Promise<IResponse<T>> => {
        try {
            const response = await this.requester.get(this.link + '/' + id);
            if (response?.isError) {
                // toastService.onError('Some error');
            } else {
                this.model.current = response.data;
            }
            return response;
        } catch (error) {
            console.warn('ApiService -> get: ', this.link, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    delete = async (id: number): Promise<IResponse<any>> => {
        try {
            const response = await this.requester.delete(this.link + '/' + id);
            if (response?.isError) {
                // toastService.onError('Some error');
            } else {
                await this.list();
                // toastService.onSuccess('Success');
            }
            return response;
        } catch (error) {
            console.warn('ApiService -> delete: ', this.link, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

}
