import React, { FC, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { observer } from 'mobx-react';
import { InfoIcon } from '../../../../../assets/icons/InfoIcon';
import { Typography } from '../../../../../UIKit/Typography';
import { DateData } from 'react-native-calendars';
import { CalendarIcon } from '../../../../../assets/icons/CalendarIcon';
import { format } from 'date-fns';
import { CalendarModal } from '../../../../../UIKit/Calendar';

interface IProps {
    label: string;
    value: string | number;
    onChoseDate: (day: DateData) => void;
}

export const TimeBoundCalendar: FC<IProps> = observer(({ label, value, onChoseDate }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [calendarVisible, setCalendarVisible] = useState(false);

    const onHandleChoseDate = (day: DateData) => {
        onChoseDate(day);
        closeCalendar();
    }

    const openCalendar = () => {
        setCalendarVisible(true);
    }

    const closeCalendar = () => {
        setCalendarVisible(false);
    }

    const time = useMemo(() => {
        if (value) {
            return format(value, 'LLL dd, y')
        }
        return value;
    }, [value]);

    return (
        <>
            <View style={styles.container} >
                <View style={styles.header}>
                    <View style={{ flex: 1 }} >
                        <Typography variant='label' text={label} />
                        <Typography variant='caption' text={t('description_time_bound')} />
                    </View>
                    <TouchableOpacity style={styles.infoButton}>
                        <InfoIcon color={colors.icon_strong} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={openCalendar}>
                    <CalendarIcon color={colors.icon_strong} />
                    <Text style={styles.text}>{time}</Text>
                </TouchableOpacity>
            </View>
            <CalendarModal visible={calendarVisible} onDayPress={onHandleChoseDate} onBackdropPress={closeCalendar} />
        </>
    );
})