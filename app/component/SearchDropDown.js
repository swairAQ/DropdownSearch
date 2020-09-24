
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
} from 'react-native';

export default function SearchDropDown(props) {
    const { dataSource } = props
    return (
        <View style={{
            position: 'absolute',
            top: '6.2%',
            left: 0, right: 0, bottom: 0,
            backgroundColor: '#84DCC6',
            paddingTop: 10,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
        }}>
            {
                dataSource.map(item => {
                    return (
                        <View style={{
                            marginHorizontal: '10%',
                            backgroundColor: 'white', marginVertical: 5,
                            height: 30,
                            justifyContent: 'center',
                            borderRadius: 4,
                        }}>
                            <Text style={{
                                color: 'black', paddingHorizontal: 10,
                            }}>{item}</Text>
                        </View>
                    )
                })
            }
        </View>

    )
}