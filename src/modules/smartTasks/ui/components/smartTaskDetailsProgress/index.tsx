import React, { FC, useMemo } from 'react';
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { observer } from 'mobx-react';
import { ISmartTask } from '../../../entity/ISmartTask';
import { Typography } from '../../../../../UIKit/Typography';
import { smartTaskModel } from '../../../entity/SmartTaskModel';
import { Button } from '../../../../../UIKit/Button';

interface IProps {
    value: string | number;
    onChangeValue: (value: string) => void;
    onSave: () => void;
}

export const SmartTaskDetailsProgress: FC<IProps> = observer(({ value, onSave, onChangeValue }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <View style={{ flex: 1 }} >
                    <Typography variant='label' text={t('progress_value')} />
                </View>
                <TouchableOpacity style={styles.infoButton}>
                    {/* <InfoIcon color={colors.icon_strong} /> */}
                </TouchableOpacity>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    value={String(value)}
                    onChangeText={onChangeValue}
                />
            </View>
            <Button text={t('save')} onPress={onSave} containerStyle={{ marginTop: 12 }} />
        </View>
    );
})