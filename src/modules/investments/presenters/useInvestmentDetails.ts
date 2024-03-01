import { useNavigation, useRoute } from "@react-navigation/native"
import { IInvestment } from "../entity/IInvestment";
import { Alert } from "react-native";
import { removeInvestmentUseCase } from "../useCases/removeInvestmentUseCase";
import { useUiContext } from "../../../UIProvider";
import { StackNavigationProp } from "@react-navigation/stack";

export const useInvestmentDetails = () => {
    const { t } = useUiContext();
    const item: IInvestment = useRoute<any>().params?.item;
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
    }

    return { item, onDelete, onEdit };
}