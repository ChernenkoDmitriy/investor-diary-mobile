import React, { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { HeaderWithBackButton } from '../../../../UIKit/HeaderWithBackButton';
import { getStyle } from './styles';
import { useMmTransactionDetails } from '../../presenters/useMmTransactionDetails';
import { MmTransactionDetailListItem } from '../components/mmTransactionDetailListItem';
import { MmTransactionHeaderButtons } from '../components/mmTransactionHeaderButtons';

export const MmTransactionDetails: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { item, onDelete, onEdit } = useMmTransactionDetails();

    return (
        <ScreenContainer
            containerStyle={styles.container}
            headerComponent={<HeaderWithBackButton title={t('transaction')} rightComponent={<MmTransactionHeaderButtons onDelete={onDelete} onEdit={onEdit} />} />}
        >
            <MmTransactionDetailListItem label={t('amount')} value={String(item?.amount)} />
            <MmTransactionDetailListItem label={t('currency')} value={item?.currency || ''} />
            <MmTransactionDetailListItem label={t('category')} value={item?.category?.name || ''} />
            <MmTransactionDetailListItem label={t('direction')} value={item?.direction} />
        </ScreenContainer>
    );
});
