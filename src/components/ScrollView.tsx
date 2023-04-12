import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Texts from './texts';
const cat = require('../assets/cat.png');

export const ScrollViews = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <Texts></Texts>
      <View style={Styles.spacer}></View>
      <Texts></Texts>
      <View style={Styles.spacer}></View>
      <Texts></Texts>
      <View style={Styles.spacer}></View>
      <View style={Styles.container}>
        <Text style={Styles.nameStyle}>Vegan Food</Text>
        <ScrollView horizontal={true}>
          <Image source={cat} style={Styles.iamgeStyle} />
          <Image source={cat} style={Styles.iamgeStyle} />
          <Image source={cat} style={Styles.iamgeStyle} />
          <Image source={cat} style={Styles.iamgeStyle} />
        </ScrollView>
      </View>
      <View style={Styles.spacer}></View>
      <Texts></Texts>
    </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  spacer: {width: '100%', height: 10, backgroundColor: 'lightgray'},
  nameStyle: {fontWeight: 'bold', color: 'black'},
  textStyle: {fontWeight: 'normal', color: 'black'},
  iamgeStyle: {width: 300, height: 300},
});

export default ScrollViews;
