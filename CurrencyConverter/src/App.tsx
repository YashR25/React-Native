import React, { useState } from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Snackbar from 'react-native-snackbar'
import { currencyByRupee } from "./constants";
import CurrencyButton from "./components/CurrencyButton";

function App(){
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const convert = (targetValue: Currency) => {
    if(!inputValue){
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#EA7773",
        textColor: "#000000"
      })
    }
    const inputAmount = parseFloat(inputValue)
    if(!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResult(result)
      setTargetCurrency(targetValue.name)
    }else{
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    }
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.inputContainer}>
        <TextInput value={inputValue} 
        onChangeText={setInputValue} 
        keyboardType="number-pad"
        placeholder="Enter the amount..."
        style={styles.input}/>
        </View>
        {result && <Text style={styles.result}>{result}</Text>}
      </View>
      <View style={styles.bottomContainer}>
        <FlatList 
        data={currencyByRupee}
        keyExtractor={item => item.name}
        numColumns={3}
        renderItem={({item}) => (
          <Pressable onPress={() => convert(item)} style={[styles.button, targetCurrency == item.name && styles.selected]}> 
            <CurrencyButton name={item.name} flag={item.flag} />
          </Pressable>
        )} />
      </View>
    </View>
     
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  input: {
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    flex: 0.5,
    backgroundColor: '#FFFFFF',
    color: '#000000'
  },
  result: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7'
  }
})