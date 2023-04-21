import { TextInput } from "react-native-gesture-handler";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/use-debounce.hook";
import { networkStatus } from "../hooks/use-network-status.hook";

export const SearchBar = () => {
    const [text,changeText] = useState('');

    const searchVal = useDebounce<string>(text,300);
    const internet = networkStatus();
    console.log('outside',internet);
    return (

      <View style={style.container}>
       <TextInput onChangeText={changeText} value={text} style={style.textInput}></TextInput>
       <Pressable style ={style.buttonStyle} onPress={() => console.log(text)}/>
      </View>
    );
  };

  const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    textInput:{
        width:'100%',
        height:50,
        backgroundColor:'tomato'
    },
    buttonStyle:{
        width:100,
        height:100,
        backgroundColor:'lightgreen'
    }
  })

  export default SearchBar;