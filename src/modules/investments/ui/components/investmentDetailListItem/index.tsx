import React, { FC, memo, useMemo } from 'react';
import { View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { Typography } from '../../../../../UIKit/Typography';

interface IProps {
    label: string;
    value: string;
}

export const InvestmentDetailListItem: FC<IProps> = memo(({ label, value }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container} >
            <Typography variant='body1' text={label} style={styles.label} />
            <Typography variant='h6' text={value} />
        </View>
    );
})