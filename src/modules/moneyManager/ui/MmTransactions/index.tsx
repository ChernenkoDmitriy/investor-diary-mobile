import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { MmTransactionsList } from '../components/mmTransactionsList';
import { FloatingButton } from '../../../../UIKit/FloatingButton';
import { useMmTransactions } from '../../presenters/useMmTransactions';
import { MmTransactionsHeader } from '../components/mmTransactionsHeader';
import { MmPieChart } from '../components/mmPieChart';

export const MmTransactionsView: FC = observer(() => {
    const { t } = useUiContext();
    const { onGoToCreateTransaction, onGetTransactionsPeriod, onClear } = useMmTransactions();

    return (
        <ScreenContainer edges={['top']} >
            <MmPieChart />
            <MmTransactionsHeader onGetTransactionsPeriod={onGetTransactionsPeriod} onClear={onClear} />
            <MmTransactionsList />
            <FloatingButton onPress={onGoToCreateTransaction} />
        </ScreenContainer>
    );
});
