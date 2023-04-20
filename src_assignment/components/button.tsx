
import { Pressable, View, StyleSheet, Alert, Text, Image, Linking } from "react-native/"

interface Props {
    email?: string
    password?: string
    onLogin: () => void
}

export const MyButton = (props: Props) => {
    const facebook = require('../assets/icons/arrow-back-outline.svg')
    const instagram = require('../assets/icons/arrow-back-outline.svg')
    const twitter = require('../assets/icons/arrow-back-outline.svg')
    const f = 'https://www.facebook.com'
    const i = 'https://www.instagram.com'
    const t = 'https://www.twitter.com'
    const onPress = (link: string) => { Linking.openURL(link) }

    const showAlert = () => {
        Alert.alert(`The email is: ${props.email}`, `The password is: ${props.password}`, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ])
    }


    return (
        <View style={styles.button}>
            <Pressable style={styles.press} onPress={props.onLogin}>
                <Text style={styles.text}>Login</Text>
            </Pressable>
            <View style={styles.bigFooter}>
                <Text style={styles.text}>Or Sign-Up using</Text>
                <View style={styles.footer}>
                    <Pressable onPress={() => onPress(f)} style={styles.icons}>
                        <Image source={facebook} style={styles.iconSize} />
                    </Pressable>
                    <Pressable onPress={() => onPress(i)} style={styles.icons}>
                        <Image source={instagram} style={styles.iconSize} />
                    </Pressable>
                    <Pressable onPress={() => onPress(t)} style={styles.icons}>
                        <Image source={twitter} style={styles.iconSize} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    press: {
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 20,
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        height: 300,
        alignItems: 'center',
        marginTop: 500,
        marginBottom: 0,
        backgroundColor:'tomato',
        position:'absolute'
    },
    icons: {
        margin: 5
    },
    iconSize: {
        width: 40,
        height: 40,
    },
    bigFooter: {
        marginTop:150,
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    }
})