import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from '../stackNavigator';
 import { useUiContext } from '../../UIProvider';

export const RootNavigator: FC =  () => {
    const { colors, theme } = useUiContext();

    return (
        <NavigationContainer theme={{ colors, dark: theme === 'dark' }}>
            <MainStackNavigator />
        </NavigationContainer>
    );
};
