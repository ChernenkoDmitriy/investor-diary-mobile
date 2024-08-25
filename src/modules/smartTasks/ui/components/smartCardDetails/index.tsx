import React, { FC, useMemo } from 'react';
import { View, Text } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { observer } from 'mobx-react';
import { Typography } from '../../../../../UIKit/Typography';
import { smartTaskModel } from '../../../entity/SmartTaskModel';
import { format } from 'date-fns';

export const SmartCardDetails: FC = observer(({ }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const smartTask = smartTaskModel.current;

    const time = useMemo(() => {
        if (smartTask?.time_bound) {
            return format(smartTask?.time_bound, 'LLL dd, y')
        }
        return '';
    }, [smartTask]);

    return (
        <View style={styles.container} >
            <View style={styles.item}>
                <View style={styles.latterContainer}>
                    <Text style={styles.latter}>S</Text>
                </View>
                <View style={styles.textContainer}>
                    <Typography variant='label' text={smartTaskModel.current?.specific} />
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.latterContainer}>
                    <Text style={styles.latter}>M</Text>
                </View>
                <View style={styles.textContainer}>
                    <Typography variant='label' text={`${smartTaskModel.current?.measurable} $`} />
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.latterContainer}>
                    <Text style={styles.latter}>A</Text>
                </View>
                <View style={styles.textContainer}>
                    <Typography variant='label' text={smartTaskModel.current?.achievable} />
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.latterContainer}>
                    <Text style={styles.latter}>R</Text>
                </View>
                <View style={styles.textContainer}>
                    <Typography variant='label' text={smartTaskModel.current?.relevant} />
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.latterContainer}>
                    <Text style={styles.latter}>T</Text>
                </View>
                <View style={styles.textContainer}>
                    <Typography variant='label' text={time} />
                </View>
            </View>
        </View>
    );
})