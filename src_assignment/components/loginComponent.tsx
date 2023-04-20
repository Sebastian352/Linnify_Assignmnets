import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image, Linking } from "react-native/";
import { MyEmail } from "./emails";
import { MyPassword } from "./password";
import { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from "react";
import { MyButton } from "./button";
import { ArrowIcon } from "../assets/icons";
import { LoginFormRef } from "../types/LoginFormRef";

interface Props {
    onLogin?: () => void;
}

export const LoginForm = forwardRef((props:Props,ref:ForwardedRef<LoginFormRef>) => {
    const background = require('../assets/inception.jpg')

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    useImperativeHandle(ref,():LoginFormRef => ({
        getData : () => ({email, pass}),
        setData : (em:string,ps:string) =>{setEmail(em), setPass(ps)},
    }));

    const onChangeEmail = (emailNew: string) => { setEmail(emailNew) }
    const onChangePass = (passNew: string) => { setPass(passNew) }

    const passRef = useRef<TextInput>(null);
    
    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.backImg}>
                <View style={styles.top}>
                    {/* <Image source={backIcon} style={styles.backIcon}/> */}
                    <ArrowIcon width={20} height={20}/>
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput value={email}style={{width:300,height:30, backgroundColor:'red'}} onChangeText={onChangeEmail} onSubmitEditing={() => passRef.current?.focus()}/>
                </View>
                <View style={styles.inputs}>
                    <TextInput value={pass} style={{width:300,height:30, backgroundColor:'blue'}} ref={passRef} onChangeText={onChangePass}/>

                </View>
                <View>
                   {// <MyButton email={email} password={pass} onLogin={props.onLogin}/>
                   }</View>
            </ImageBackground>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    backImg: {
        width: '100%',
        height: '100%',
    },
    backIcon: {
        width: 120,
        height: 120,
    },
    top: {
        height: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: -3, height: 1 },
        textShadowRadius: 5,
        marginBottom: 10,
    },
    inputs: {
        height: 70,
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 10,
    },
})