import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import FlatCard from "./components/FlatCard";
import ElevatedCards from "./components/ElevatedCards";
import Trending from "./components/Trending";

function App(){
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <FlatCard/>
          <ElevatedCards />
          <Trending />
        </ScrollView>
      </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})