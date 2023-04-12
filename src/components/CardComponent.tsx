import {FlatList, StyleSheet, Text, View, Image, Pressable} from 'react-native';

import {CardProps} from '../types/CardProps';

const cat = require('../assets/cat.png');
const heart = require('../assets/heart-outline.png');

interface CardProp {
  prop: CardProps;
  onPress: () => void;
  onPressChangeNumber: (value: number) => void;
  value: number;
}

export const CardComponent = (props: CardProp) => {
  return (
    <View style={style.container}>
      <View style={style.component}>
        <Pressable
          style={style.imageContainerStyle}
          onPress={() => props.onPressChangeNumber(props.value)}>
          <Image source={heart} style={style.heartStyle} />
          <Image source={props.prop.image} style={style.imageStyle} />
        </Pressable>
        <View style={style.textContainerStyle}>
          <Text style={style.titleStyle}>{props.prop.title}</Text>
          <Text style={style.textStyle}>{props.prop.description}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  component: {
    flex: 2 / 3,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
    marginHorizontal: 20,
  },
  imageStyle: {
    zIndex: 1,
    height: 200,
    borderRadius: 40,
    maxWidth: '100%',
    maxHeight: '100%',
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
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
});

export default CardComponent;
