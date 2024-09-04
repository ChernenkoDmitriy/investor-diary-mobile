import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { MmTransactionsList } from '../components/mmTransactionsList';
import { FloatingButton } from '../../../../UIKit/FloatingButton';
import { useMmTransactions } from '../../presenters/useMmTransactions';
import { MmPieChart } from '../components/mmPieChart';
import { MmTransactionCalendarPeriod } from '../components/mmTransactionCalendarPeriod';
import { mmTransactionModel } from '../../entities/mmTransaction/MmTransactionModel';
import { EmptyListView } from '../../../../UIKit/emptyListView';

export const MmTransactionsView: FC = observer(() => {
    const { t } = useUiContext();
    const { range, setRange, onGoToCreateTransaction } = useMmTransactions();

    return (
        <ScreenContainer edges={['top']} >
            <MmTransactionCalendarPeriod range={range} setRange={setRange} />
            {
                mmTransactionModel.mmTransactions?.length === 0
                    ? <EmptyListView text={t('noTransactionsYet')} />
                    : <>
                        <MmPieChart />
                        <MmTransactionsList />
                    </>
            }
            <FloatingButton onPress={onGoToCreateTransaction} />
        </ScreenContainer>
    );
});
