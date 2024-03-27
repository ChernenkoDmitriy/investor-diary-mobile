import { mmSpendingCategoryModel } from "../entities/mmSpendingCategory/MmSpendingCategoryModel";
import { mmSpendingCategoryService } from "../entities/mmSpendingCategory/MmSpendingCategoryService";

export const getMmSpendingCategoriesUseCase = async () => {
    try {
        const { data, isError, message } = await mmSpendingCategoryService.get();
        if (!isError) {
            mmSpendingCategoryModel.mmSpendingCategories = data;
        }
        return { isError, message };
    } catch (error) {
        console.error('getMmSpendingCategoriesUseCase: ', error);
        return { isError: true, data: null, message: 'Something went wrong' };
    }
}