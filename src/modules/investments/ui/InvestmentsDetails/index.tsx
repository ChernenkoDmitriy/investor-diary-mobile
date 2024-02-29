import React, { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { HeaderWithBackButton } from '../../../../UIKit/HeaderWithBackButton';
import { getStyle } from './styles';
import { useInvestmentDetails } from '../../presenters/useInvestmentDetails';
import { InvestmentDetailListItem } from '../components/investmentDetailListItem';
import { InvestmentsHeaderButtons } from '../components/investmentsHeaderButtons';

export const InvestmentsDetailsView: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { item, onDelete, onEdit } = useInvestmentDetails();

    return (
        <ScreenContainer
            containerStyle={styles.container}
            headerComponent={<HeaderWithBackButton title={item?.name} rightComponent={<InvestmentsHeaderButtons onDelete={onDelete} onEdit={onEdit} />} />}
        >
            <InvestmentDetailListItem label={t('name')} value={item?.name} />
            <InvestmentDetailListItem label={t('currency')} value={item?.currency} />
            <InvestmentDetailListItem label={t('amount')} value={String(item?.amount)} />
            <InvestmentDetailListItem label={t('ticker')} value={item?.ticker} />
            <InvestmentDetailListItem label={t('enteringPrice')} value={String(item?.enteringPrice)} />
            <InvestmentDetailListItem label={t('enteringDate')} value={item?.enteringDate} />
            <InvestmentDetailListItem label={t('broker')} value={item?.broker} />
            <InvestmentDetailListItem label={t('type')} value={item?.type} />
            <InvestmentDetailListItem label={t('sector')} value={item?.sector} />
        </ScreenContainer>
    );
});
