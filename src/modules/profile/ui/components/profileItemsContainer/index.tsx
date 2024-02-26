import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { getStyles } from './styles';
import { observer } from 'mobx-react';

interface IProps {
    children: React.ReactNode | React.ReactNode[];
}

export const ProfileItemsContainer: FC<IProps> = observer(({ children }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);

    return (
        <View style={styles.container} >
            {children}
        </View>
    );
});
