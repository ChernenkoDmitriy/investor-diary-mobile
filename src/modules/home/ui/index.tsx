import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../UIProvider';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { ScrollView } from 'react-native';
import { InvestmentListItem } from '../../investments/ui/components/investmentListItem';
import { IInvestment } from '../../investments/entity/IInvestment';
import { Button } from '../../../UIKit/Button';
import { useHomeView } from '../presenters/useHomeView';
import { investmentsModel } from '../../investments/entity/InvestmentsModel';

export const HomeView: FC = observer(() => {
    const { t } = useUiContext();
    const { onGoToCreateInvestment, onGoToDetailInvestment } = useHomeView();

    return (
        <ScreenContainer edges={['top']} >
            <ScrollView >
                {investmentsModel.investments?.map((investment: IInvestment) => (
                    <InvestmentListItem key={investment.id} item={investment} onPress={onGoToDetailInvestment} />
                ))}
            </ScrollView>
            <Button text={t('createInvestments')} onPress={onGoToCreateInvestment} />
        </ScreenContainer>
    );
});
