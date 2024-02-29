import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useUiContext } from '../../UIProvider';
import { ProfileView } from '../../modules/profile/ui/Profile';
import { ProfileIcon } from '../../assets/icons/ProfileIcon';
import { HomeIcon } from '../../assets/icons/HomeIcon';
import { HomeView } from '../../modules/home/ui';

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