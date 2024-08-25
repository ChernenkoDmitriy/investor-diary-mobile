import { IRequester, requester } from "../../../libs/requester";
import { links } from "../../../Links";
import { ApiService } from "../../../repository/ApiService";
import { IMobXModel } from "../../../repository/MobXModel";
import { ISmartTask } from "./ISmartTask";
import { smartTaskModel } from "./SmartTaskModel";
import { IResponse } from "../../../libs/requester/IRequester/IResponse";

class SmartTaskService extends ApiService<ISmartTask> {

    private _requester: IRequester;
    private _link: string;
    private _model: IMobXModel<ISmartTask>;

    constructor(requester: IRequester, link: string, model: IMobXModel<ISmartTask>) {
        super(requester, link, model);
        this._requester = requester;
        this._link = link;
        this._model = model;
    }

    create = async (body: any): Promise<any> => {
        try {
            const dto = {
                ...body,
                time_bound: new Date(body.time_bound).getTime(),
                measurable: parseFloat(body.measurable),
            };
            const response = await this._requester.post(this._link, dto);
            if (response?.isError) {
                // toastService.onError('Some error');
            } else {
                await this.all();
            }
            return response;
        } catch (error) {
            console.warn('SmartTaskService -> create: ', this._link, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    update = async (body: any): Promise<IResponse<ISmartTask>> => {
        try {
            const dto = {
                ...body,
                time_bound: new Date(body.time_bound).getTime(),
                measurable: parseFloat(body.measurable),
                progress_value: parseFloat(body.progress_value),
            };
            const url = `${this._link}/${body.id}`;
            const response = await this._requester.patch(url, dto);
            if (response?.isError) {
                // toastService.onError('Some error');
            } else {
                this._model.current = response.data;
                await this.all();
            }
            return response;
        } catch (error) {
            console.warn('SmartTaskService -> update: ', this._link, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

}

export const smartTaskService = new SmartTaskService(requester, links.smartTasks, smartTaskModel);