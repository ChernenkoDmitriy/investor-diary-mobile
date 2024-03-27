import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const useMmTransactions = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onGoToCreateTransaction = () => {
        navigation.navigate("MmTransactionCreateView");
    }

    return { onGoToCreateTransaction };
}