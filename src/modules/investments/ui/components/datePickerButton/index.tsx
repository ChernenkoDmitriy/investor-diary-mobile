import React, { FC, memo, useMemo } from 'react';
import { getStyle } from './styles';
import { TouchableOpacity } from 'react-native';
import { Typography } from '../../../../../UIKit/Typography';
import { useUiContext } from '../../../../../UIProvider';

interface IProps {
    date: string;
    onPress: () => void;
}

export const DatePickerButton: FC<IProps> = memo(({ date, onPress }) => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Typography type='caption' text={t('enteringDate')} />
            <Typography type='body2' text={date} />
        </TouchableOpacity>
    );
});
