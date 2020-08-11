import React, { useState } from 'react';

import { 
    StyleSheet, 
    Text, 
    Button, 
    TextInput,
    View, 
    Dimensions } 
    from 'react-native';


export default function searchArea(props) {

    const [username, setUsername] = useState('')


    return (
        <View>
            <View style={styles.sideBySide}>
                <View>
                    <TextInput
                    style={styles.textinput}
                    placeholder="Enter a Gamertag"
                    onChangeText={username => setUsername(username)}
                    defaultValue={username}
                    />
                </View>

                <View style={styles.buttonStyles}>
                    <Button
                    onPress={() => alert('Button Pressed!')}
                    title="Submit"
                    color="white"
                    ></Button>
                </View>
            </View>

            <View>
                <Text>Username is {username}</Text>
                <Text>Platform is {platform}</Text>
            </View>
        </View>
    )

}

let styles = StyleSheet.create({
    textinput: {
        width: Dimensions.get('window').width / 2,
        padding: 10,
        alignSelf: 'center',
        height: 40,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 5
    },
    sideBySide: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonStyles: {
        marginLeft: 20,
        height: 40,
        backgroundColor: '#111111',
        borderColor: '#111111',
        borderRadius: 5,
        color: 'white'
    },
})