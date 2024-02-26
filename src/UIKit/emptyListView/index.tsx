import React, { FC, memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import { getStyles } from './styles';
import { useUiContext } from '../../UIProvider';

interface IProps {
    text: string;
}

export const EmptyListView: FC<IProps> = memo(({ text }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.title} >{text}</Text>
        </View>
    )
})
