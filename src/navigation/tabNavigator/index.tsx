import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileStackNavigator, TrainingStackNavigator } from '../stackNavigator';
import { useUiContext } from '../../UIProvider';
import { SettingsIcon } from '../../assets/icons/SettingsIcon';
import { GymIcon } from '../../assets/icons/GymIcon';

const Tab = createBottomTabNavigator();

export const TabNavigator: FC = observer(() => {
    const { colors, t } = useUiContext();

    return (
        <Tab.Navigator initialRouteName='TrainingStackNavigator' screenOptions={{ headerShown: false }} detachInactiveScreens={false} >
            <Tab.Screen
                name='TrainingStackNavigator'
                component={TrainingStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => <GymIcon color={focused ? colors.primary : colors.icon} />,
                    tabBarLabel: t('trainings'),
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.icon,
                }}
            />
            <Tab.Screen
                name='ProfileStackNavigator'
                component={ProfileStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => <SettingsIcon color={focused ? colors.primary : colors.icon} />,
                    tabBarLabel: t('settings'),
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.icon,
                }}
            />
        </Tab.Navigator >
    );
}) 