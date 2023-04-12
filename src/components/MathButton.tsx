import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props{
    value:number,
    onPress: (n:number) => void
}

export const MathButtons = (text:Props) =>{
    return(
        <View style={Style.container}>
            <Pressable onPress={() => text.onPress(text.value)} style={({pressed}) => [
            Style.button,
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}>
            <Text style={Style.textStyle}>{text.value}</Text>
            </Pressable>
        </View>
    );
}

const Style = StyleSheet.create({
    button:{
        width:100,
        height:100,
        backgroundColor:'lightblue',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    container:{
        // flex:1
    },
    textStyle:{
        color:'white',
        fontSize:32

    }
});