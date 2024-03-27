import { useNavigation, useRoute } from "@react-navigation/native";
import { useUiContext } from "../../../UIProvider";
import { IMmTransaction } from "../entities/mmTransaction/IMmTransaction";
import { Alert } from "react-native";
import { mmTransactionModel } from "../entities/mmTransaction/MmTransactionModel";
import { StackNavigationProp } from "@react-navigation/stack";
import { deleteMmTransactionUseCase } from "../useCases/deleteMmTransactionUseCase";

export const useMmTransactionDetails = () => {
    const { t } = useUiContext();
    const itemId = useRoute<any>().params?.item?.id;
    const item: IMmTransaction = mmTransactionModel.mmTransactions?.find(item => item.id === Number(itemId)) || {} as IMmTransaction;
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onDelete = () => {
        Alert.alert(t('delete'), t('sureDeleteMmTransaction'), [
            { text: t('cancel'), style: 'cancel', },
            {
                text: t('delete'), style: 'destructive', onPress: () => {
                    deleteMmTransactionUseCase(item.id);
                    navigation.goBack();
                },
            },
        ]);
    }

    const onEdit = () => {
        navigation.navigate('MmTransactionCreateView', { item });
    }

    return { item, onDelete, onEdit };
}