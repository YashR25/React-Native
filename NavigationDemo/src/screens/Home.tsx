import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamsList, 'Home'>

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home</Text>
      <Button onPress={ () => {
        navigation.navigate('Details', {
            productId: '56'
        })
      } } title='Go to Details Screen'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeText: {
        color: '#FFF',
        fontWeight: 'bold'
    }
})