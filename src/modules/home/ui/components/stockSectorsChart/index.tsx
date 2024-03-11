import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { getStyle } from './styles';
import { ChartPie } from '../../../../../UIKit/ChartPie';
import { useUiContext } from '../../../../../UIProvider';
import { Typography } from '../../../../../UIKit/Typography';
import { observer } from 'mobx-react';
import { useSectorsPieChart } from '../../../presenters/useSectorsPieChart';

export const StockSectorsChart: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { chartData } = useSectorsPieChart();;

    return (
        <View style={styles.container}>
            <ChartPie items={chartData} />
            <View style={styles.legendContainer}>
                {chartData.map((item, index) => (
                    <View key={index} style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: item.color }]} />
                        <View style={styles.legendTextContainer}>
                            <Typography variant='caption' text={`${t(item.legend)} - ${Math.round(item.value)} USD (${item.percentage}%)`} />
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
});
