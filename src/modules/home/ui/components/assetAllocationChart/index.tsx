import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { getStyle } from './styles';
import { useInvestmentPieChart } from '../../../presenters/useInvestmentPieChart';
import { ChartPie } from '../../../../../UIKit/ChartPie';
import { useUiContext } from '../../../../../UIProvider';
import { Typography } from '../../../../../UIKit/Typography';
import { observer } from 'mobx-react';

export const AssetAllocationChart: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { chartData } = useInvestmentPieChart();;

    return (
        <View style={styles.container}>
            <ChartPie items={chartData} />
            <View style={styles.legendContainer}>
                {chartData.map((item, index) => (
                    <View key={index} style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: item.color }]} />
                        <View style={styles.legendTextContainer}>
                            <Typography variant='body2' text={`${t(item.legend)} - ${Math.round(item.value)} USD (${item.percentage}%)`} />
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
});
