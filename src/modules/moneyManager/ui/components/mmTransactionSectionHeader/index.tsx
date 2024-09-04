import React, { FC, memo, useMemo } from 'react';
import { View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { Typography } from '../../../../../UIKit/Typography';
import { format } from 'date-fns';

interface IProps {
    title: string;
}

export const MmTransactionSectionHeader: FC<IProps> = memo(({ title }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container} >
            <Typography text={format(title, 'LLL dd, y')} variant='h6' style={styles.title} />
        </View>
    );
})