import {
  Image,
  ListRenderItemInfo,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {HomeIcon} from '../../../src/assets/icons';
import {BottomRoutes} from '../routes/bottom-route';
import {useNavigation} from '@react-navigation/native';
import CardComponent from '../../components/CardComponent';
import {CardProps} from '../../types/CardProps';
import {Post} from '../../../src/types/Props';
import { useEffect, useRef, useState } from 'react';
import { CardComponentRef } from '../../types/CardComponentRef';



const DetailsScreen = ({route}) => {
  const [sum, setSum] = useState<Number>(0);
  const detailsScreen = useRef<CardComponentRef>(null);

  const onPressChangeBackground = () => {
    const colors = ['tomato', 'lightblue','lightgreen','orange']
    const index:number = Math.round((Math.random())*10%3);
    console.log(index);
    detailsScreen.current?.setBackground(colors[index]);
  }
  const item: CardProps = 
    {
      id: route.params.id,
      image: route.params.image,
      title: route.params.title,
      description: route.params.description,
    }
    {
      useEffect(() => {
        return () => console.log('log');
      },[sum])
    }
    const renderCardComponent = (item: CardProps) => {
      return <CardComponent prop={item} onPress={() => setSum(sum+1)} ref = {detailsScreen} />;
    };


  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
      }}>
        {renderCardComponent(item)}
        <Pressable style={{width:50,height:50,marginTop:30, backgroundColor:'lightblue'}} onPress={onPressChangeBackground}></Pressable>
      {/* <View style={style.component}>
        <Pressable
          style={style.imageContainerStyle}
          onPress={route.params.onPress}>
          <Image source={route.params.image} style={style.imageStyle} />
        </Pressable>
        <View style={style.textContainerStyle}>
          <Text style={style.titleStyle}>{route.params.title}</Text>
          <Text style={style.textStyle}>{route.params.description}</Text>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

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
    height: '100%',
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

export default DetailsScreen;
