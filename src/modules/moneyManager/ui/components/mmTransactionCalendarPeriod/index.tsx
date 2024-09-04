import React, { FC, useMemo, memo, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { getStyle } from './styles';
import Modal from 'react-native-modal';
import { Calendar, CalendarUtils, DateData } from 'react-native-calendars';
import { useUiContext } from '../../../../../UIProvider';
import { CalendarIcon } from '../../../../../assets/icons/CalendarIcon';
import { format, startOfDay } from 'date-fns';

interface IProps {
    range: { startDate: string, endDate: string };
    setRange: (range: { startDate: string, endDate: string }) => void;
}

export const MmTransactionCalendarPeriod: FC<IProps> = memo(({ range, setRange }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [visible, setVisible] = useState(false);
    const [pickerRange, setPickerRange] = useState<{ startDate: string, endDate: string }>(range);

    const onApply = () => {
        setRange(pickerRange);
        setVisible(false);
    };

    const onCloseCalendar = () => {
        setVisible(false);
        setPickerRange(range);
    }

    const onOpenCalendar = () => {
        setVisible(true);
    }

    const { markedDates } = useMemo(() => {
        const markedDates: any = {};
        const getDay = (day: number | string) => CalendarUtils.getCalendarDateString(new Date(day));
        if (pickerRange.startDate === pickerRange.endDate) {
            markedDates[getDay(pickerRange.startDate)] = { startingDay: true, endingDay: true, color: colors.primary, textColor: colors.text_inverted };
        } else {
            const endDate = new Date(pickerRange.endDate);
            let currentDate = new Date(pickerRange.startDate);
            while (currentDate <= endDate) {
                const formattedDate = CalendarUtils.getCalendarDateString(new Date(currentDate));
                if (formattedDate === getDay(pickerRange.startDate)) {
                    markedDates[getDay(pickerRange.startDate)] = { startingDay: true, color: colors.primary, textColor: colors.text_inverted };
                } else if (formattedDate === getDay(pickerRange.endDate)) {
                    markedDates[formattedDate] = { endingDay: true, color: colors.primary, textColor: colors.text_inverted };
                } else {
                    markedDates[formattedDate] = { color: colors.primary, textColor: colors.text_inverted };
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
            markedDates[getDay(pickerRange.startDate)] = { startingDay: true, color: colors.primary, textColor: colors.text_inverted };
            markedDates[getDay(pickerRange.endDate)] = { endingDay: true, color: colors.primary, textColor: colors.text_inverted };
        }
        return { markedDates };
    }, [pickerRange]);

    const onDayPress = (day: DateData) => {
        if (pickerRange.startDate === pickerRange.endDate) {
            const startDate = new Date(pickerRange.startDate) < new Date(day.dateString) ? pickerRange.startDate : day.dateString;
            const endDate = new Date(pickerRange.startDate) < new Date(day.dateString) ? day.dateString : pickerRange.startDate;
            setPickerRange({ startDate, endDate });
        } else {
            setPickerRange({ startDate: day.dateString, endDate: day.dateString });
        }
    }

    const stringDay = useMemo(() => {
        if (pickerRange.startDate === pickerRange.endDate) {
            return format(startOfDay(new Date(pickerRange.startDate)), 'LLL dd, y');
        }
        return `${format(pickerRange.startDate, 'LLL dd, y')} -  ${format(pickerRange.endDate, 'LLL dd, y')}`;
    }, [pickerRange])
    return (
        <>
            <TouchableOpacity onPress={onOpenCalendar} style={styles.periodButton} >
                <Text style={styles.periodText}>{stringDay}</Text>
                <CalendarIcon color={colors.icon_middle} />
            </TouchableOpacity>
            <Modal
                isVisible={visible}
                hasBackdrop={true}
                backdropOpacity={0.4}
                animationIn='fadeIn'
                animationOut={'fadeOut'}
                onBackdropPress={onCloseCalendar}
                style={styles.modal}
            >
                <View style={styles.container}>
                    <Calendar
                        markingType='period'
                        onDayPress={onDayPress}
                        markedDates={markedDates}
                        style={styles.calendar}
                    />
                    <TouchableOpacity style={styles.button} onPress={onApply}>
                        <Text style={styles.buttonText}>{t('apply')}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
})
