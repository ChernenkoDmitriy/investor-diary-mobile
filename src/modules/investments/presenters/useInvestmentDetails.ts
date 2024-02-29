import { useRoute } from "@react-navigation/native"
import { IInvestment } from "../entity/IInvestment";

export const useInvestmentDetails = () => {
    const item: IInvestment = useRoute<any>().params?.item;

    const onDelete = () => {
    }

    const onEdit = () => {
    }

    return { item, onDelete, onEdit };
}