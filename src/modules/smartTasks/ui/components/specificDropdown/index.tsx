import React, { FC, useMemo } from 'react';
import { TouchableOpacity, View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { Dropdown } from '../../../../../UIKit/Dropdown';
import { observer } from 'mobx-react';
import { SmartTasksSpecificEnum } from '../../../entity/enums/SmartTaskSpecificEnum';
import { Typography } from '../../../../../UIKit/Typography';
import { InfoIcon } from '../../../../../assets/icons/InfoIcon';

interface IProps {
    value: string;
    onChange: (key: any, value: string) => void;
}

export const SpecificDropdown: FC<IProps> = observer(({ value, onChange }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const ITEMS: any = useMemo(() => {
        return Object.entries(SmartTasksSpecificEnum).map((entry) => ({ label: t(entry[0]), value: entry[1] }));
    }, []);

    const onChangeValue = (value: { label: string; value: string; }) => {
        onChange('specific', value.value);
    }

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <View style={{ flex: 1 }} >
                    <Typography variant='label' text={t('specific')} />
                    <Typography variant='caption' text={t('description_specific')} />
                </View>
                <TouchableOpacity style={styles.infoButton}>
                    <InfoIcon color={colors.icon_strong} />
                </TouchableOpacity>
            </View>
            <Dropdown
                value={value}
                setValue={onChangeValue}
                items={ITEMS}
                placeholder={t('specific')}
            />
        </View>
    );
})