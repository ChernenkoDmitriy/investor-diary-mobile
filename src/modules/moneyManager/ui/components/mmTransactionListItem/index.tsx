import React, { FC, memo, useMemo } from 'react';
import { TouchableOpacity } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { IMmTransaction } from '../../../entities/mmTransaction/IMmTransaction';
import { Typography } from '../../../../../UIKit/Typography';

interface IProps {
    item: IMmTransaction;
    onPress?: (item: IMmTransaction) => void;
}

export const MmTransactionListItem: FC<IProps> = memo(({ item, onPress }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandlePress = () => {
        onPress && onPress(item);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onHandlePress}>
            <Typography text={item.category?.name || ''} variant='h6' />
            <Typography text={`${item.amount} ${item.currency}`} variant='h6' />
        </TouchableOpacity>
    );
})