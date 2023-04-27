import {FlatList, StyleSheet, Text, View, Image, Pressable} from 'react-native';

import {CardProps} from '../types/CardProps';
import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { CardComponentRef } from '../types/CardComponentRef';
import { useNavigation } from '@react-navigation/native';
import {MMKV} from 'react-native-mmkv'
interface CardProp {
  prop: CardProps;
  onPress: () => void;
}



export const CardComponent = forwardRef((props: CardProp,ref:ForwardedRef<CardComponentRef>) => {
  const navigation = useNavigation();
  const [background,setBackground] = useState('white');



  useImperativeHandle(ref,() =>({
    setBackground:(bg:string) => {setBackground(bg)}
  }));
  const storage = new MMKV();

  useEffect(()=>{
    const res = storage.getString("anykey");
    console.log(res);
    },[])
  return (
    <Pressable style={style.component} onPress={props.onPress}>
      <View style={style.imageContainerStyle}>
        <Image source={{uri: props.prop.image}} style={style.imageStyle} />
      </View>
      <View style={[style.textContainerStyle,{backgroundColor:background}]}>
        <Text style={style.titleStyle}>{props.prop.name}</Text>
        <Text style={style.textStyle} numberOfLines={3}>
          {props.prop.description}
        </Text>
      </View>
    </Pressable>
  );
});

const style = StyleSheet.create({
  component: {
    flex: 2 / 3,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 40,
    backgroundColor: 'white',
    marginHorizontal: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 40,
  },
  imageStyle: {
    zIndex: 1,
    height: 200,
    width:'100%',
    borderRadius: 35,
    maxWidth: '100%',
    maxHeight: '100%',
    resizeMode: 'cover',
  },
  heartStyle: {
    zIndex: 2,
    width: 40,
    height: 40,
    position: 'absolute',
    margin: 30,
  },
  imageContainerStyle: {
    flex: 1 / 2,
    borderRadius: 40,
    alignItems: 'flex-end',
    borderBottomWidth: 5,
    borderBottomColor: 'black',
  },
  textContainerStyle: {
    flex: 2 / 4,
    padding: 10,
    borderRadius: 40,
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    margin: 10,
    textAlign: 'auto',
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
});

export default CardComponent;
