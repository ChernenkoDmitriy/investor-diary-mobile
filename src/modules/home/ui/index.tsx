import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../UIProvider';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { ScrollView } from 'react-native';
import { InvestmentListItem } from '../../investments/ui/components/investmentListItem';
import { IInvestment } from '../../investments/entity/IInvestment';
import { Button } from '../../../UIKit/Button';
import { useHomeView } from '../presenters/useHomeView';
import { Accordion } from '../../../UIKit/Accordion';
import { AssetAllocationChart } from './components/assetAllocationChart';
import { StockSectorsChart } from './components/stockSectorsChart';

export const HomeView: FC = observer(() => {
    const { t } = useUiContext();
    const { data, onGoToCreateInvestment, onGoToDetailInvestment } = useHomeView();

    return (
        <ScreenContainer edges={['top']} >
            <ScrollView >
                <StockSectorsChart />
                <AssetAllocationChart />
                {Object.keys(data).map((key) => (
                    <Accordion key={key} title={key} >
                        {data[key]?.map((investment: IInvestment) => (<InvestmentListItem key={investment.id} item={investment} onPress={onGoToDetailInvestment} />))}
                    </Accordion>
                ))}
            </ScrollView>
            <Button text={t('createInvestments')} onPress={onGoToCreateInvestment} />
        </ScreenContainer>
    );
});
