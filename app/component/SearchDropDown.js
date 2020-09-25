
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

        }}>

            <View style={{

                backgroundColor: '#84DCC6',
                paddingTop: 10,
                marginHorizontal: 20,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                flexWrap: 'wrap',

                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
            }}>
                {
                    dataSource.length ?

                        dataSource.map(item => {
                            return (
                                <View style={{
                                    // marginHorizontal: '10%',
                                    backgroundColor: 'white',
                                    height: 30,
                                    width: '90%',
                                    marginBottom: 10,
                                    justifyContent: 'center',
                                    borderRadius: 4,
                                }}>
                                    <Text style={{
                                        color: 'black',
                                        paddingHorizontal: 10,
                                    }}>{item}</Text>
                                </View>
                            )
                        })

                        :
                        <View
                            style={{
                                alignSelf: 'center',
                                // margin: 20,
                                height: 100,
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignContent: 'center'
                            }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: 'white'
                            }}>No search items matched</Text>
                        </View>
                }

            </View>
        </View>

    )
}