import React, { FC, useMemo } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { observer } from 'mobx-react';
import { ISmartTask } from '../../../entity/ISmartTask';

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
                <Text>{item.name}</Text>
                <Text>{item.progress_value}</Text>
                <Text>{item.progress_value_percent}</Text>
            </View>
        </TouchableOpacity>
    );
})