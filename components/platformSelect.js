import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import SearchArea from './searcharea'

const Stack = createStackNavigator();

export default function platformSelect() {
    return (
        <View>
            <Text style={styles.Text}>Select A Platform</Text>

            <TouchableOpacity 
            style={styles.TouchableOpacity}
            onPress={() => {
                this.props.navigation.navigate('SearchArea')
            }}
            >
                <Button title="Windows" color="white"></Button>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.TouchableOpacity}
            onPress={() => {
                this.props.navigation.navigate('SearchArea')
            }}
            >
                <Button title="Playstation" color="white"></Button>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.TouchableOpacity}
            onPress={() => {
                this.props.navigation.navigate('SearchArea')
            }}
            >
                <Button title="Xbox" color="white"></Button>
            </TouchableOpacity>


        </View>
    )

}

let styles = StyleSheet.create({
    TouchableOpacity: {
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: "#333333",
        width: Dimensions.get('window').width / 1.3,
        margin: 20,
        borderRadius: 5
    },
    Text: {
        alignItems: "center",
        fontSize: 30,
        color: "white",
        alignSelf: "center",
        margin: 20
    }
})