import { Button, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../App'

type DetailsProp = NativeStackScreenProps<RootStackParamsList, 'Details'>

export default function Details({navigation, route}: DetailsProp) {
  const isDark = useColorScheme() == "dark"
  const {productId} = route.params

  return (
    <View style={[styles.container, isDark ? styles.dark : styles.light]}>
      <Text style={[styles.detailsText, isDark ? styles.lightText : styles.dark]}>{productId}</Text>
      <Text style={[styles.detailsText, isDark ? styles.lightText : styles.dark]}>Details</Text>
      <Button onPress={() => navigation.navigate("Home")} title='Go Back'/>
      <Button onPress={() => navigation.popToTop()} title='Go to Home Screen' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsText: {
      color: '#000000',
      fontWeight: 'bold'
  },
  lightText: {
    color: "#FFF"
  },
  darkText: {
    color: '#000000'
  },
  dark:{
    backgroundColor: '#000000',
  },
  light: {
    backgroundColor: '#FFF'
  }
})