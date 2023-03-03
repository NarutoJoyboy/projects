import React from "react";
import { Text, TouchableHighlight, View,Button } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./Project/3-Home";
import Account from "./Project/3-account";
import setting from "./Project/3-Setting"




const Stack = createNativeStackNavigator();

export default function App() {

const btnAction = () => {
   
       
}

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}
                options={{
                    headerLeft:()=><Button  title="Y A"/>,
                    headerRight:()=><Button onPress={btnAction} title="setting" />,
                    headerTitleAlign:"center"
                }}
                />

                <Stack.Screen name="Details" component={Account} 
                options={{
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:'skyblue',
                    }
                }}
                />

                <Stack.Screen name="setting" component={setting}/>


            </Stack.Navigator>
        </NavigationContainer>
    )
}


