import React, { FC, useMemo, memo, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { getStyle } from './styles';
import Modal from 'react-native-modal';
import { Calendar, DateData } from 'react-native-calendars';
import { useUiContext } from '../../../../../UIProvider';
import { CalendarIcon } from '../../../../../assets/icons/CalendarIcon';
import { MarkedDates } from 'react-native-calendars/src/types';
import { Button } from '../../../../../UIKit/Button';

interface IProps {
    onSubmit: (periodStart: string, periodEnd: string) => void;
}

export const MmTransactionCalendarPeriod: FC<IProps> = memo(({ onSubmit }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [visible, setVisible] = useState(false);
    const [period, setPeriod] = useState<MarkedDates>({});

    const disabled = Object.keys(period).length < 2;

    const onHandleSubmit = () => {
        const periodStart: any = Object.keys(period)[0];
        const periodEnd: any = Object.keys(period)[Object.keys(period).length - 1];
        console.log(periodStart, periodEnd);
        console.log(period);
        onSubmit(periodStart, periodEnd);
        setPeriod({});
        setVisible(false);
    }

    const onBackdropPress = () => {
        setPeriod({});
        setVisible(false);
    }

    const onOpenCalendar = () => {
        setVisible(true);
    }

    const onHandleDayPress = (day: DateData) => {
        if (Object.keys(period).length === 2) {
            setPeriod({ [day.dateString]: { color: 'green' } });
        } else if (Object.keys(period).length === 1) {
            // @ts-ignore
            const periodStart: any = day.dateString < Object.keys(period)[0] ? day.dateString : Object.keys(period)[0];
            // @ts-ignore
            const periodEnd: any = day.dateString > Object.keys(period)[0] ? day.dateString : Object.keys(period)[0];
            const periods: any = {
                [periodStart]: { color: 'green' },
                [periodEnd]: { color: 'green' }
            };
            // let currentDate = periodStart;
            // while (new Date(currentDate).getTime() <= new Date(periodEnd).getTime()) {
            //     periods[currentDate] = { color: 'green' };
            //     currentDate = new Date(currentDate);
            //     currentDate.setDate(currentDate.getDate() + 1);
            //     currentDate = currentDate.toISOString().split('T')[0];
            //     console.log(currentDate);
            // }
            setPeriod(periods);
        } else {
            setPeriod({ [day.dateString]: { color: 'green' } });
        }
    }

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={onOpenCalendar}>
                <CalendarIcon />
            </TouchableOpacity>
            <Modal
                isVisible={visible}
                hasBackdrop={true}
                backdropOpacity={0.4}
                animationIn='fadeIn'
                animationOut={'fadeOut'}
                onBackdropPress={onBackdropPress}
                style={styles.modal}
            >
                <View style={styles.container}>
                    <Calendar
                        markedDates={period}
                        markingType={'period'}
                        onDayPress={onHandleDayPress}
                        style={styles.calendar}
                    />
                    <Button text={t('submit')} onPress={onHandleSubmit} disabled={disabled} />
                </View>
            </Modal>
        </>
    );
})
