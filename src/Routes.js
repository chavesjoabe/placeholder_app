import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import UserRegister from './UserRegister';
import PasswordRegister from './PasswordRegister';
import ResponsibleRegister from './ResponsibleRegister';
import MenuHelp from './MenuHelp';
import Directions from './Directions';
import CheckPlace from './CheckPlace';
import Home from './Home';
import Search from './Search';

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
                <stack.Screen name="PasswordRegister" component={PasswordRegister} />
                <stack.Screen name="ResponsibleRegister" component={ResponsibleRegister} />
                <stack.Screen name="MenuHelp" component={MenuHelp} />
                <stack.Screen name="Directions" component={Directions} />
                <stack.Screen name="CheckPlace" component={CheckPlace} />
                <stack.Screen name="Home" component={Home} />
                <stack.Screen name="Search" component={Search} />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
