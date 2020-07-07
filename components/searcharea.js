import React, { useState } from 'react';

import { 
    StyleSheet, 
    Text, 
    Button, 
    TextInput,
    View, 
    Dimensions,
    TouchableOpacity } 
    from 'react-native';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faWindows, faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons"

export default function searchArea(props) {

    const [platform, setPlatform] = useState('Windows')
    const [username, setUsername] = useState('')

    function platformPressed() {
        styles.Playstation.color = "#333333";
        styles.Windows.color = "#333333";
        styles.Xbox.color = "#333333"

    }

    return (
        <View>
            <View style={styles.sideBySide}>
                <View style={styles.iconsWrapper}>

                    <FontAwesomeIcon 
                    onPress={() => {
                        setPlatform("Windows")
                        platformPressed()
                        styles.Windows.color = "#111111"
                    }}
                    size={30} 
                    icon={ faWindows }
                    styles={{
                        color: styles.Windows.color
                    }}
                    />


                    <FontAwesomeIcon 
                    onPress={() => {
                        setPlatform("Playstation")
                        platformPressed()
                        styles.Playstation.color = "#111111"
                    }}
                    size={30} 
                    icon={ faPlaystation }
                    styles={{
                        color: styles.Playstation.color
                    }}
                    />



                    <FontAwesomeIcon 
                    onPress={() => {
                        setPlatform("Xbox")
                        platformPressed()
                        styles.Xbox.color = "#111111"
                    }}
                    size={30} 
                    icon={ faXbox }
                    styles={{
                        color: styles.Xbox.color
                    }}
                    />


                </View>

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
    iconsWrapper: {
        marginLeft: 20,
        marginRight: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    sideBySide: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20
    },
    buttonStyles: {
        marginLeft: 20,
        height: 40,
        backgroundColor: '#111111',
        borderColor: '#111111',
        borderRadius: 5,
        color: 'white'
    },
    Windows: {
        color: '#111111'
    },
    Xbox: {
        color: "#333333"
    },
    Playstation: {
        color: "#333333"
    }
})