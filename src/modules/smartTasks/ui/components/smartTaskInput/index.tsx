import React, { FC, useMemo } from 'react';
import { View, TextInput, TouchableOpacity } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { observer } from 'mobx-react';
import { InfoIcon } from '../../../../../assets/icons/InfoIcon';
import { Typography } from '../../../../../UIKit/Typography';

interface IProps {
    label: string;
    value: string;
    option: any;
    onChangeText: (key: any, value: string) => void;
}

export const SmartTaskInput: FC<IProps> = observer(({ label, option, value, onChangeText }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandleChangeText = (text: string) => {
        onChangeText(option, text);
    }

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <View style={{ flex: 1 }} >
                    <Typography variant='label' text={label} />
                    <Typography variant='caption' text={t(`description_${option}`)} />
                </View>
                <TouchableOpacity style={styles.infoButton}>
                    <InfoIcon color={colors.icon_strong} />
                </TouchableOpacity>
            </View>
            <View>
                <TextInput
                    placeholder={t(`placeholder_${option}`)}
                    style={styles.input}
                    value={value}
                    onChangeText={onHandleChangeText}
                />
            </View>
        </View>
    );
})