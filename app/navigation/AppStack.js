import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../component/Home';
import Details from '../component/Details';
const Stack = createStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />

        </Stack.Navigator>
    )
}
export default AppStack;