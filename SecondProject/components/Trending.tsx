import { Image, Linking, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

function openUrl(url: string){
  Linking.openURL(url)
}
export default function Trending() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Trending</Text>
      <View style={styles.card}>
        <Image source={{
          uri: 'https://images.pexels.com/photos/13940670/pexels-photo-13940670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }} style={styles.image} />
        <View style={styles.descContainer}>
          <View>
          <Text style={styles.cardTitle}>Title</Text>
          </View>
          <View>
          <Text numberOfLines={3} style={styles.cardDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quam sequi! Explicabo sint rerum quasi voluptatibus adipisci esse natus iusto?</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {openUrl('https://www.google.com/')}} style={styles.button}>
            <Text style={styles.buttonText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10
    },
    card: {
      backgroundColor: '#FFFFFF',
      width: '90%',
      height: 'auto',
      margin: 8,
      flex: 1,
      borderRadius: 10,
      overflow: 'hidden'
      
    },
    image: {
      height: 200
    },
    cardTitle: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 20
    },
    descContainer: {
      padding: 8,
    },
    cardDesc: {
      color: "#4C4B4B",
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 20
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 15
    },
    button: {
      margin: 8,
      backgroundColor: "#000000",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10
    }
})