import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react';
import { RegistrationView } from '../../modules/authentication/ui/Registration';
import { AuthorizationView } from '../../modules/authentication/ui/Authorization';
import { LaunchAppView } from '../../modules/splash/ui';
import { ProfileView } from '../../modules/profile/ui';
import { TabNavigator } from '../tabNavigator';
import { TrainingListView } from '../../modules/trainingList/ui';
import { TrainingCreationView } from '../../modules/trainingCreation/ui';

const Stack = createStackNavigator();

export const MainStackNavigator: FC = observer(() => {
    return (
        <Stack.Navigator initialRouteName='LaunchAppView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='LaunchAppView' component={LaunchAppView} />
            <Stack.Screen name='AuthorizationView' component={AuthorizationView} />
            <Stack.Screen name='RegistrationView' component={RegistrationView} />
            <Stack.Screen name='TabNavigator' component={TabNavigator} />
            <Stack.Screen name='TrainingCreationView' component={TrainingCreationView} />
        </Stack.Navigator >
    );
});

export const TrainingStackNavigator: FC = observer(() => {
    return (
        <Stack.Navigator initialRouteName='TrainingListView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='TrainingListView' component={TrainingListView} />
        </Stack.Navigator >
    );
});

export const ProfileStackNavigator: FC = observer(() => {
    return (
        <Stack.Navigator initialRouteName='ProfileView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='ProfileView' component={ProfileView} />
        </Stack.Navigator >
    );
});