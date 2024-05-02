import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { getStyle } from './styles';
import { ChartPie } from '../../../../../UIKit/ChartPie';
import { useUiContext } from '../../../../../UIProvider';
import { Typography } from '../../../../../UIKit/Typography';
import { observer } from 'mobx-react';
import { useMmPieChart } from '../../../presenters/useMmPieChart';

export const MmPieChart: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { chartData } = useMmPieChart();;

    return (
        <View style={styles.container}>
            <ChartPie items={chartData} />
            <View style={styles.legendContainer}>
                {chartData.map((item: any, index: number) => (
                    <View key={index} style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: item.color }]} />
                        <View style={styles.legendTextContainer}>
                            <Typography variant='body2' text={`${t(item.legend.toLowerCase())} - ${Math.round(item.value)} UAH (${item.percentage}%)`} />
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
});
