import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>ElevatedCards</Text>
      <ScrollView style={styles.cardContainer} horizontal>
        <View style={[styles.card, styles.firstCard]}>
            <Text>FirstCard</Text>
        </View>
        <View style={[styles.card, styles.secondCard]}>
            <Text>FirstCard</Text>
        </View>
        <View style={[styles.card, styles.thirdCard]}>
            <Text>FirstCard</Text>
        </View>
        <View style={[styles.card, styles.fourthCard]}>
            <Text>FirstCard</Text>
        </View>
      </ScrollView>
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
    cardContainer: {
        // flex: 1,
        // flexDirection: 'row'
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
        backgroundColor: '#E44236'
    },
    secondCard: {
        backgroundColor: '#74B9FF'
    },
    thirdCard: {
        backgroundColor: '#3C40C6'
    },
    fourthCard: {
        backgroundColor: '#6AB04A'
    }
})