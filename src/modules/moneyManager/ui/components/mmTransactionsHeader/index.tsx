import React, { FC, memo, useMemo } from 'react';
import { View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { MmTransactionCalendarPeriod } from '../mmTransactionCalendarPeriod';
import { Button } from '../../../../../UIKit/Button';

interface IProps {
    onClear: () => void;
    onGetTransactionsPeriod: (periodStart: string, periodEnd: string) => void;
}

export const MmTransactionsHeader: FC<IProps> = memo(({ onGetTransactionsPeriod, onClear }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container} >
            <MmTransactionCalendarPeriod onSubmit={onGetTransactionsPeriod} />
            <Button text={t('clear')} onPress={onClear} containerStyle={styles.button} />
        </View>
    );
})