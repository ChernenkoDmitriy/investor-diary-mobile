import React, { FC, memo, useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import PieChart from 'react-native-pie-chart'

interface Data {
    color: string;
    value: number;
    legend: string;
    percentage: number;
}

interface IProps {
    items: Data[];
    size?: number;
    containerStyle?: ViewStyle;
}

export const ChartPie: FC<IProps> = memo(({ items, containerStyle, size = 150 }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const { series, sliceColor, total } = useMemo(() => {
        const sliceColor = items.map(item => item.color);
        const total = items.reduce((acc, item) => acc + item.value, 0);
        const series = items.map(item => item.value / total * 100);
        return { series, sliceColor, total };
    }, [items]);

    return (
        total
            ? <View style={[styles.container, containerStyle]}>
                <PieChart
                    widthAndHeight={size}
                    series={series}
                    sliceColor={sliceColor}
                />
            </View>
            : null
    )
});
