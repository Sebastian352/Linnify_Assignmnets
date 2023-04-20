import { useState } from "react"
import { View, Text, TextInput, StyleSheet, Image, Pressable } from "react-native/"

interface Props {
    onChange: (value: string) => void
}

export const MyPassword = (props: Props) => {
    const icon0 = require('../assets/icons/arrow-back-outline.svg')
    const icon1 = require('../assets/icons/arrow-back-outline.svg')
    const [secure, setSecure] = useState(true)

    return (
        <View>
            <Text style={styles.tag}>Password</Text>
            <View style={styles.container}>
            <TextInput style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={secure}
                onChangeText={(pass) => props.onChange(pass)}
            />
            <Pressable onPress={() => setSecure(!secure)}>   
            {secure? 
            <Image style={styles.myImage} source={icon0} /> :
            <Image style={styles.myImage} source={icon1} />}     
            </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: 'white',
        borderBottomWidth: 2,
        marginRight: 5
    } ,
    tag: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
    },
    inputText: {
        width: '90%',
        color: 'black',
        height: 40
    },
    myImage: {
        width: 30,
        height: 40,
        resizeMode: 'contain'
    },
})