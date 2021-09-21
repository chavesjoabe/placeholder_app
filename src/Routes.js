import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import UserRegister from './UserRegister';
import PasswordRegister from './PasswordRegister';
import ResponsibleRegister from './ResponsibleRegister';
import MenuHelp from './MenuHelp';

const stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <stack.Navigator
                headerMode="none"
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: '#fff',
                    },
                }}
            >
                <stack.Screen name="Login" component={Login} />
                <stack.Screen name="UserRegister" component={UserRegister} />
                <stack.Screen
                    name="PasswordRegister"
                    component={PasswordRegister}
                />
                <stack.Screen
                    name="ResponsibleRegister"
                    component={ResponsibleRegister}
                />
                <stack.Screen name="MenuHelp" component={MenuHelp} />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
