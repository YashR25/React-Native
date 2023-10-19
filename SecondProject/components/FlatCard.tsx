import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>FlatCard</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.firstCard]}>
            <Text>FirstCard</Text>
        </View>
        <View style={[styles.card, styles.secondCard]}>
            <Text>FirstCard</Text>
        </View>
        <View style={[styles.card, styles.thirdCard]}>
            <Text>FirstCard</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    card: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 10
    },
    firstCard: {
        backgroundColor: '#E44236',
    },
    secondCard: {
        backgroundColor: "#2475B0",
    },
    thirdCard: {
        backgroundColor: '#26ae60'
    }

})