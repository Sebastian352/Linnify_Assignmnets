import {
  Text,
  View,
  StyleSheet,
  Linking,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

const onPress = () => console.log('pressed');
const heart = require('../assets/heart.png');
const heartOutline = require('../assets/heart-outline.png');
const cat = require('../assets/cat.png');
const close = require('../assets/close.png');
const more = require('../assets/more-horizontal.png');
const people = require('../assets/people.png');
const comment = require('../assets/comment.png');
const send = require('../assets/send.png');
const printText = (text: string) => console.log(text);

import {Post} from '../types/Props';
import {useState} from 'react';
interface Postare {
  m1: Post;
  onPress: (title: string) => void;
}

export const Texts = (props: Postare) => {
  return (
    <View style={Styles.sectionContainer}>
      <View style={{flexDirection: 'row'}}>
        {/*Headers*/}
        <View>
          <Image source={cat} style={Styles.profileImage}></Image>
        </View>
        <View>
          <Text style={Styles.nameStyle}>
            {props.m1.title} <Text style={{fontWeight: 'normal'}}>is at</Text>{' '}
            Linnify
          </Text>
          <Text style={Styles.nameStyle}>Cluj Napoca</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 3,
            }}>
            <Text
              style={[Styles.nameStyle, {fontWeight: 'normal', fontSize: 12}]}>
              3d
            </Text>
            <Image source={people} style={Styles.peopleStyle} />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 30}}>
          <Image source={more} style={Styles.iconStyle} />
          <Image source={close} style={Styles.iconStyle} />
        </View>
      </View>

      {/*Content*/}
      <Text style={[Styles.textStyle, {marginVertical: 30}]}>
        {props.m1.description}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={props.m1.image}
          style={[Styles.imageStyle, {height: 350}]}></Image>
        <View>
          <Image source={props.m1.image} style={Styles.imageStyle}></Image>
          <Image source={props.m1.image} style={Styles.imageStyle}></Image>
        </View>
      </View>

      {/*Footer*/}
      <View style={Styles.footerStyle}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image source={heart} style={Styles.reactionStyle}></Image>
          <Text style={Styles.reactionTextStyle}>78</Text>
        </View>
        <Text style={Styles.textStyle}>7 comments</Text>
      </View>

      {/*Spacer*/}
      <View style={Styles.spacer}></View>

      {/*Buttons*/}
      <View style={Styles.buttonContainer}>
        <Pressable
          style={({pressed}) => [
            Styles.pressableStyle,
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
          onPress={() => props.onPress}>
          <Image source={heartOutline} style={Styles.buttonImageStyle} />
          <Text style={Styles.reactionTextStyle}>Like</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            Styles.pressableStyle,
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}>
          <Image source={comment} style={Styles.buttonImageStyle} />
          <Text style={Styles.reactionTextStyle}>Comment</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            Styles.pressableStyle,
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}>
          <Image source={send} style={Styles.buttonImageStyle} />
          <Text style={Styles.reactionTextStyle}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  pressableStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    flex: 1,
  },
  buttonImageStyle: {height: 30, width: 30},
  profileImage: {
    borderRadius: 50,
    width: 60,
    height: 60,
    marginRight: 20,
  },
  imageStyle: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 2,
    marginBottom: 0,
  },
  footerStyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
  },
  peopleStyle: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
  },
  nameStyle: {fontWeight: 'bold', color: 'black'},
  textStyle: {fontWeight: 'normal', color: 'black'},
  reactionTextStyle: {fontWeight: 'normal', color: 'black', marginLeft: 10},
  iconStyle: {width: 25, height: 25, marginHorizontal: 10},
  reactionStyle: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  spacer: {width: '95%', backgroundColor: 'lightgray', height: 2},
});
export default Texts;

/*
<TextInput
        style={Styles.textInput}
        placeholder={'email'}
        inputMode={'email'}
        onChangeText={newText => printText(newText)}
      />
      <View style={{alignItems: 'flex-start', margin: 20}}>
        <Text style={{fontSize: 25}}>Password:</Text>
        <TextInput
          style={Styles.passwordInput}
          placeholder={'password'}
          inputMode={'text'}
          secureTextEntry={true}
        />
      </View>
      <View style={Styles.viewStyle}>
        <TextInput style={Styles.catInput} placeholder="text" />
        <Image source={Cat} style={Styles.imageStyle} />
      </View>
*/

/*
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          Styles.pressable,
        ]}>
        <Image source={cat} style={Styles.dangerSign} />
        <Text>Press me</Text>
      </Pressable>
*/
