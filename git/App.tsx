import React from 'react';
import {PropsWithChildren,useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Texts from './src/components/texts';
import ScrollViews from './src/components/ScrollView';
import { MathButtons } from './src/components/MathButton';

import { Post } from "./src/types/Props";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const data:Post[]=[
  {
  id:1,
  image:require('./src/assets/cat.png'),
  title:'titlu1',
  description:"Descriere"
},
{
  id:2,
  image:require('./src/assets/cat.png'),
  title:'titlu2',
  description:"Descriere2"
},  {
  id:3,
  image:require('./src/assets/cat.png'),
  title:'titlu3',
  description:"Descriere3"
},

]

function Section({children, title}: SectionProps): JSX.Element {
  const[pressed,setPressed] = useState("titlu");
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const onPress = () => console.log("pressed");

const renderItem = ({item}: ListRenderItemInfo<Post>) => {
  return <Texts m1={item} onPress={onPress}></Texts>
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [number,setNumber] = useState(0);

  const onPress = (n:number) =>{
    setNumber(number+n);
  }

  const onPressReset = (n:number) =>{
    setNumber(0);
  }
  return (
  <SafeAreaView style={styles.flex}>
    {/* <FlatList
     data={data} 
     renderItem={renderItem} 
     keyExtractor={(data) => data.title} 
     ListEmptyComponent={<View><Text>No Data</Text></View>}
     ListHeaderComponent={<View style={{alignItems:'center'}}><Text style={{fontSize:32,fontWeight:'bold'}}>Header Text</Text></View>}
     ListFooterComponent={<View style={{alignItems:'center'}}><Text style={{fontSize:32,fontWeight:'bold'}}>Footer Text</Text></View>}
     ItemSeparatorComponent={() => <View style={{width:'100%',height:30,backgroundColor:'lightblue'}}></View>}
     /> */}
    <View style={styles.buttonContainer}>
      <MathButtons value={-1} onPress={onPress}/>
      <MathButtons value={1} onPress={onPress}/>
    </View>
    <View style={styles.textContainer} ><Text style={styles.textStyle}>{number}</Text></View>
    <View style={styles.buttonContainer}>
      <MathButtons value={-2} onPress={onPress}/>
      <MathButtons value={2} onPress={onPress}/>
    </View>
    <View style={[styles.buttonContainer,{justifyContent:'center'}]}>
      <MathButtons value={0} onPress={onPressReset}/>
    </View>
  </SafeAreaView>);
} 

const styles = StyleSheet.create({
  flex:{
    flex:1,
    justifyContent:'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonContainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    width:'100%',
    // height:50
  },
  textContainer:{
    width:'100%',
    alignItems:'center',
  },
  textStyle:{
    color:'black',
    fontSize:32

}
});

export default App;
