import React, { FC, useMemo } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { observer } from 'mobx-react';
import { ISmartTask } from '../../../entity/ISmartTask';
import { NLTProgressBar } from '../../../../../UIKit/NLTProgressBar';
import { Typography } from '../../../../../UIKit/Typography';
import { format } from 'date-fns';

interface IProps {
    item: ISmartTask;
    onPress: (item: ISmartTask) => void;
}

export const SmartTasksListItem: FC<IProps> = observer(({ item, onPress }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandlePress = () => {
        onPress(item);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onHandlePress} >
            <View style={styles.indicator} />
            <View style={styles.infoContainer}>
                <Typography variant='label' numberOfLines={1} text={item.name} />
                <View style={styles.row}>
                    <Text style={styles.label}>{t('measurable')}</Text>
                    <Text style={styles.value}>{item.progress_value} {item.currency || ''}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>{t('time_bound')}</Text>
                    <Text style={styles.value}>{format(item.time_bound, 'LLL dd, y')}</Text>
                </View>
                <NLTProgressBar progressPercent={item.progress_value_percent} />
            </View>
        </TouchableOpacity>
    );
});
