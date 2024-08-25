import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { IInvestment } from "../../investments/entity/IInvestment";
import { useEffect, useMemo } from "react";
import { investmentsModel } from "../../investments/entity/InvestmentsModel";
import { useLaunchAppUseCase } from "../useCases/useLaunchAppUseCase";
import { getMmSpendingCategoriesUseCase } from "../../moneyManager/useCases/getMmSpendingCategoriesUseCase";
import { getMmPaymentSourceServiceUseCase } from "../../moneyManager/useCases/getMmPaymentSourceServiceUseCase";
import { candidatesService } from "../../../entities/sectors/SectorsService";
import { sectorsModel } from "../../../entities/sectors/SectorsModel";

export const useHomeView = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        candidatesService.all();
        useLaunchAppUseCase();
        getMmSpendingCategoriesUseCase();
        getMmPaymentSourceServiceUseCase();
    }, []);

    console.log('investmentsModel.investments', sectorsModel.all);

    const onGoToCreateInvestment = () => {
        navigation.navigate('InvestmentsCreateView');
    }

    const onGoToDetailInvestment = (item: IInvestment) => {
        navigation.navigate('InvestmentsDetailsView', { item });
    }

    const data = useMemo(() => {
        const typesSet: { [key: string]: IInvestment[] } = {};
        investmentsModel.investments?.forEach((investment) => {
            if (typeof investment.type === 'undefined' || investment.type === null) {
                typesSet['other'] = [investment];
            } else if (typesSet[investment.type]) {
                typesSet[investment.type]?.push(investment);
            } else {
                typesSet[investment.type] = [investment];
            }
        });
        return typesSet;
    }, [investmentsModel.investments]);

    return { data, onGoToCreateInvestment, onGoToDetailInvestment };

}