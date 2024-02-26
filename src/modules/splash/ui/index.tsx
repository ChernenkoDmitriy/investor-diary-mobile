import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { Text } from 'react-native';
import { useUiContext } from '../../../UIProvider';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { useLaunchApp } from '../presenters/useLaunchApp';
import { getStyles } from './styles';

export const LaunchAppView: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);
    useLaunchApp();

    return (
        <ScreenContainer contentContainerStyle={styles.container} >
            <Text style={styles.text}  >
                {t('appName')}
            </ Text>
        </ScreenContainer>
    )
})
