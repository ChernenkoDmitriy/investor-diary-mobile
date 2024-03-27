import { IStorage, storage } from "../../../../libs/storage";
import { MobXRepository } from "../../../../repository/MobXRepository";
import { IMmSpendingCategory } from "./IMmSpendingCategory";

export interface IMmSpendingCategoryModel {
    mmSpendingCategories: IMmSpendingCategory[] | null;
    clear: () => void;
}

class MmSpendingCategoryModel implements IMmSpendingCategoryModel {
    private mmSpendingCategoriesRepository = new MobXRepository<IMmSpendingCategory[] | null>(null);

    constructor(private storage: IStorage) {
        this.load();
    }

    private load = () => {
        this.storage.get('STORAGE_MM_SPENDING_CATEGORIES')
            .then(data => { data && this.mmSpendingCategoriesRepository.save(data); })
            .catch(error => console.warn('MmSpendingCategoryModel -> load: ', error));
    }

    private persist = (data: IMmSpendingCategory[] | null) => {
        if (data) {
            this.storage.set('STORAGE_MM_SPENDING_CATEGORIES', data);
        } else {
            this.storage.remove('STORAGE_MM_SPENDING_CATEGORIES');
        }
    }

    public get mmSpendingCategories() {
        return this.mmSpendingCategoriesRepository.data;
    }

    public set mmSpendingCategories(value: IMmSpendingCategory[] | null) {
        this.mmSpendingCategoriesRepository.save(value);
        this.persist(value);
    }

    public clear() {
        this.mmSpendingCategories = null;
    }

}

export const mmSpendingCategoryModel = new MmSpendingCategoryModel(storage);
