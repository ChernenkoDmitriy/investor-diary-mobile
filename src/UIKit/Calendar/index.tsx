import React, { FC, useMemo, memo } from 'react';
import { View, } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import Modal from 'react-native-modal';
import { Calendar, DateData } from 'react-native-calendars';

interface IProps {
    onDayPress: (day: DateData) => void;
    visible: boolean;
    onBackdropPress?: () => void;
}

export const CalendarModal: FC<IProps> = memo(({ visible, onDayPress, onBackdropPress }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
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
                    minDate='2024-01-01'
                    onDayPress={onDayPress}
                    style={styles.calendar}
                />
            </View>
        </Modal>
    );
})
