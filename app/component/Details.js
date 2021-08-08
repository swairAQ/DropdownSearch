/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text } from 'react-native'

export default function Details(props) {
    // debugger
    const { item } = props.route.params
    return (<View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }}>
        < Text style={{ fontSize: 30 }}>
            {item}
        </Text>
    </ View>)

}


