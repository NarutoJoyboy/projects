import React from "react";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native";

export default function setting() {
    return (
        <View>
            <TouchableHighlight onPress={() => console.log('great')}>

                <Text style={styles.txt}>Reset Progress</Text>

            </TouchableHighlight>

            <TouchableHighlight onPress={() => console.log('great')}>
                <Text style={styles.txt}>Admin Portal</Text>
            </TouchableHighlight>
        </View>
    )
}


const styles = StyleSheet.create({
    txt: {
        color: 'black',
        fontSize: 22,
        padding: 20,
        marginHorizontal: 12,
        backgroundColor: 'white',
        elevation: 2,
        margin: 14
    }
})