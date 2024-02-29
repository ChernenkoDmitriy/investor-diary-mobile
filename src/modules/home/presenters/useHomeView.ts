import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { IInvestment } from "../../investments/entity/IInvestment";

export const useHomeView = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onGoToCreateInvestment = () => {
        navigation.navigate('InvestmentsCreateView');
    }

    const onGoToDetailInvestment = (item: IInvestment) => {
        navigation.navigate('InvestmentsDetailsView', { item });
    }

    return { onGoToCreateInvestment, onGoToDetailInvestment };

}