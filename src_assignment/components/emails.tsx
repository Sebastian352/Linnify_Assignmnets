
import { useState } from "react"
import { TextInput, View, StyleSheet, Text } from "react-native/"

interface Props {
    onChange: (value: string) => void
}

export const MyEmail = (props: Props) => {
    const [color, setColor] = useState('white')

    const verify = (verif: string) => {
        if (verif.includes('@') == true && (verif.includes('gmail') == true || verif.includes('yahoo') == true)) 
               { setColor('green'),
                props.onChange(verif)}
        else if (verif.includes('@') == false)
               { setColor('#ba090c'),
                props.onChange('EMAIL IS INCORRECT')}
        else
            console.log('ajutor')
    }

    return (
        <View>
            <Text style={styles.tag}>Email</Text>
            <TextInput style={[styles.inputText,{ borderColor: color}]}
            
                placeholder="Email"
                placeholderTextColor="white"
                keyboardType="email-address"
                onChangeText={verify}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    tag: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
    },
    inputView: {
        marginLeft: 10,

    },
    inputText: {
        width: '99%',
        borderBottomWidth: 2,
        color: 'black',
        height: 40
    }
})