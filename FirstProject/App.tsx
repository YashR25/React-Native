import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  useColorScheme,
  StyleSheet
} from "react-native"

function App(){
  const isDarkMode = useColorScheme() === "dark"
  return (
    // <SafeAreaView>
      <View style={styles.container}>  
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello React !</Text>
      </View>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  darkText: {
    color: "#000000"
  },
  whiteText: {
    color: "#FFFFFF"
  },
})

export default App