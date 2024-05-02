import { useNavigation, useRoute } from "@react-navigation/native"
import { IInvestment } from "../entity/IInvestment";
import { Alert } from "react-native";
import { removeInvestmentUseCase } from "../useCases/removeInvestmentUseCase";
import { useUiContext } from "../../../UIProvider";
import { StackNavigationProp } from "@react-navigation/stack";
import { investmentsModel } from "../entity/InvestmentsModel";

export const useInvestmentDetails = () => {
    const { t } = useUiContext();
    const itemId = useRoute<any>().params?.item?.id;
    const item: IInvestment = investmentsModel.investments?.find(item => item.id === Number(itemId)) || {} as IInvestment;
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onDelete = () => {
        Alert.alert(t('delete'), t('sureDeleteInvestment'), [
            { text: t('cancel'), style: 'cancel', },
            {
                text: t('delete'), style: 'destructive', onPress: () => {
                    removeInvestmentUseCase(item.id);
                    navigation.goBack();
                },
            },
        ]);
    }

    const onEdit = () => {
        navigation.navigate('InvestmentsCreateView', { item });
    }

    return { item, onDelete, onEdit };
}