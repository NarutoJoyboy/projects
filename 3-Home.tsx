import React from "react";
import { Text, TouchableHighlight, View, Image, StyleSheet } from "react-native";
import setting from "./3-Setting";

export default function Home(props: any) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../project-pics/photos/quiz.webp')}
                style={styles.image}
            />
            <View style={styles.main}>
                <Text style={styles.txt}>The Quiz App</Text>
                <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate('Setting')}>
                    <Text style={styles.txt2}>Start</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    image: {
        width: '70%',
        height: '25%',
        marginHorizontal: 50,
        marginTop: 100,
    },
    txt: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        paddingBottom: 10

    },
    button: {
        backgroundColor: 'lightblue',
        width: '55%',
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    main: {
        alignItems: 'center',
        marginTop: 100
    },
    txt2: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center'
    }
})