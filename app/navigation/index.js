import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import { View } from 'react-native';

function Navigator() {

    return (
        <NavigationContainer>
            <AppStack />

        </NavigationContainer>
    )
}

export default Navigator;