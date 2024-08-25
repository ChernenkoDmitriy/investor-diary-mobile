import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useUiContext } from '../../UIProvider';
import { ProfileView } from '../../modules/profile/ui/Profile';
import { ProfileIcon } from '../../assets/icons/ProfileIcon';
import { HomeIcon } from '../../assets/icons/HomeIcon';
import { HomeView } from '../../modules/home/ui';
import { MmTransactionsView } from '../../modules/moneyManager/ui/MmTransactions';
import { BanknoteIcon } from '../../assets/icons/BanknoteIcon';
import { SmartTasksView } from '../../modules/smartTasks/ui/SmartTasks';
import { TargetIcon } from '../../assets/icons/TargetIcon';

const Tab = createBottomTabNavigator();

export const TabNavigator: FC = observer(() => {
    const { colors, t } = useUiContext();

    return (
        <Tab.Navigator initialRouteName='TrainingStackNavigator' screenOptions={{ headerShown: false }} detachInactiveScreens={false} >
            <Tab.Screen
                name='HomeView'
                component={HomeView}
                options={{
                    tabBarIcon: ({ focused }) => <HomeIcon color={focused ? colors.primary : colors.icon_strong} />,
                    tabBarLabel: t('home'),
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.icon_strong,
                }}
            />
            <Tab.Screen
                name='MmTransactionsView'
                component={MmTransactionsView}
                options={{
                    tabBarIcon: ({ focused }) => <BanknoteIcon color={focused ? colors.primary : colors.icon_strong} />,
                    tabBarLabel: t('moneyManager'),
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.icon_strong,
                }}
            />
            <Tab.Screen
                name='SmartTasksView'
                component={SmartTasksView}
                options={{
                    tabBarIcon: ({ focused }) => <TargetIcon color={focused ? colors.primary : colors.icon_strong} />,
                    tabBarLabel: t('smartTasks'),
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.icon_strong,
                }}
            />
            <Tab.Screen
                name='ProfileView'
                component={ProfileView}
                options={{
                    tabBarIcon: ({ focused }) => <ProfileIcon color={focused ? colors.primary : colors.icon_strong} />,
                    tabBarLabel: t('profile'),
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.icon_strong,
                }}
            />
        </Tab.Navigator >
    );
}) 