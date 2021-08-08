/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';
import SearchDropDown from '../shared/SearchDropDown'
import Details from './Details'

export default function Home(props) {
  const [dataSource] = useState(['apple', 'banana', 'cow', 'dex', 'zee', 'orange', 'air', 'bottle'])
  const [colors] = useState(['#84DCC6', '#FEC8C8', '#F7E4CF', "#E8DEF3",
  ])
  const [filtered, setFiltered] = useState(dataSource)
  const [searching, setSearching] = useState(false)
  const onSearch = (text) => {
    if (text) {
      setSearching(true)
      const temp = text.toLowerCase()

      const tempList = dataSource.filter(item => {
        if (item.match(temp))
          return item
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(dataSource)
    }

  }
  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  return (
    <View style={styles.container}>

      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor='white'
        onChangeText={onSearch}

      />
      <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20, }}> List of data</Text>
        <View style={{
          flexWrap: 'wrap', flexDirection: 'row',
          justifyContent: 'center'

        }}>
          {
            dataSource.map((item, index) => {
              return (
                <View style={{
                  margin: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 80, width: 80, backgroundColor: randomColor()
                }}>
                  <Text style={{ fontSize: 15, }}>
                    {item}
                  </Text>
                </View>
              )
            })
          }
        </View>

      </View>

      {/* your components can stay here like anything */}
      {/* and at the end of view */}
      {
        searching &&
        <SearchDropDown
          onPress={(item) => {
            setSearching(false)
            props.navigation.navigate('Details', { item: item })
          }}
          dataSource={filtered} />
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    flex: 1
  },
  textInput: {
    backgroundColor: '#BFBFBF',
    width: '80%',
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});

