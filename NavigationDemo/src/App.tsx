import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "./screens/Home";
import Details from "./screens/Details"
import {} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<RootStackParamsList>()

export type RootStackParamsList = {
    Home: undefined,
    Details: {productId: string}
}

function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{title: 'Home'}}/>
                <Stack.Screen name="Details" component={Details} options={{title: 'Details'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({
  
})