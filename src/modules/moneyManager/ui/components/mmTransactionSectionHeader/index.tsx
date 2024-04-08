import React, { FC, memo, useMemo } from 'react';
import { View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { Typography } from '../../../../../UIKit/Typography';

interface IProps {
    title: string;
}

export const MmTransactionSectionHeader: FC<IProps> = memo(({ title }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container} >
            <Typography text={title} variant='h6' style={styles.title} />
        </View>
    );
})