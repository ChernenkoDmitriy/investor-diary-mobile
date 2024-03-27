import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { RegistrationView } from '../../modules/authentication/ui/Registration';
import { AuthorizationView } from '../../modules/authentication/ui/Authorization';
import { TabNavigator } from '../tabNavigator';
import { LaunchAppView } from '../../modules/launchApp/ui';
import { InvestmentsCreateView } from '../../modules/investments/ui/InvestmentsCreate';
import { InvestmentsDetailsView } from '../../modules/investments/ui/InvestmentsDetails';
import { MmTransactionCreateView } from '../../modules/moneyManager/ui/MmTransactionCreate';
import { MmTransactionDetails } from '../../modules/moneyManager/ui/MmTransactionDetails';

const Stack = createStackNavigator();

export const MainStackNavigator: FC = observer(() => {
    return (
        <Stack.Navigator initialRouteName='LaunchAppView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='LaunchAppView' component={LaunchAppView} />
            <Stack.Screen name='AuthorizationView' component={AuthorizationView} />
            <Stack.Screen name='RegistrationView' component={RegistrationView} />
            <Stack.Screen name='TabNavigator' component={TabNavigator} />
            <Stack.Screen name='InvestmentsDetailsView' component={InvestmentsDetailsView} />
            <Stack.Screen name='InvestmentsCreateView' component={InvestmentsCreateView} />
            <Stack.Screen name='MmTransactionCreateView' component={MmTransactionCreateView} />
            <Stack.Screen name='MmTransactionDetails' component={MmTransactionDetails} />
        </Stack.Navigator >
    );
});
