import React from 'react';
import {PropsWithChildren, useState} from 'react';
import {
  FlatList,
  Image,
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
import {MathButtons} from './src/components/MathButton';
import CardComponent from './src/components/CardComponent';

import {Post} from './src/types/Props';
import {CardProps} from './src/types/CardProps';
import {HomeIcon} from './src/assets/icons';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabs} from './src/navigation/navigators/tab-navigator';
{
  //import {AppNavigator} from './src/navigation/navigators/app-navigator';
}
import {AppNavigator} from './src_assignment/navigation/navigators/app-navigation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const cat = require('./src/assets/cat.png');

const data: Post[] = [
  {
    id: 1,
    image: require('./src/assets/cat.png'),
    title: 'titlu1',
    description: 'Descriere',
  },
  {
    id: 2,
    image: require('./src/assets/cat.png'),
    title: 'titlu2',
    description: 'Descriere2',
  },
  {
    id: 3,
    image: require('./src/assets/cat.png'),
    title: 'titlu3',
    description: 'Descriere3',
  },
];

function Section({children, title}: SectionProps): JSX.Element {
  const [pressed, setPressed] = useState('titlu');
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

const onPressLog = () => console.log('pressed');

const renderItem = ({item}: ListRenderItemInfo<Post>) => {
  return <Texts m1={item} onPress={onPressLog}></Texts>;
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [number, setNumber] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const onPressFavorite = () => {
    setFavorite(true);
  };

  const onPress = (n: number) => {
    setNumber(number + 1);
  };

  const renderCardComponent = ({item}: ListRenderItemInfo<CardProps>) => {
    return (
      <CardComponent
        prop={item}
        onPress={onPressLog}
        onPressChangeNumber={onPress}
        value={number}
      />
    );
  };

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
  //   <SafeAreaView style={styles.flex}>
  //     <FlatList
  //       data={data}
  //       renderItem={renderCardComponent}
  //       keyExtractor={data => data.title}
  //       ListEmptyComponent={
  //         <View>
  //           <Text>No Data</Text>
  //         </View>
  //       }
  //       ListHeaderComponent={
  //         <View style={styles.headerStyle}>
  //           <HomeIcon width={20} height={20}/>
  //         </View>
  //       }
  //       ListFooterComponent={
  //         <View style={styles.footerStyle}>
  //           <Text style={{fontSize: 32, fontWeight: 'bold', color: 'black'}}>
  //             {number} Favorite
  //           </Text>
  //         </View>
  //       }
  //       ItemSeparatorComponent={() => (
  //         <View
  //           style={{
  //             width: '100%',
  //             height: 30,
  //             backgroundColor: '#F5FCFF',
  //           }}></View>
  //       )}
  //     />

  //     {
  //       // <View style={styles.buttonContainer}>
  //       //   <MathButtons value={-1} onPress={onPress}/>
  //       //   <MathButtons value={1} onPress={onPress}/>
  //       // </View>
  //       // <View style={styles.textContainer} ><Text style={styles.textStyle}>{number}</Text></View>
  //       // <View style={styles.buttonContainer}>
  //       //   <MathButtons value={-2} onPress={onPress}/>
  //       //   <MathButtons value={2} onPress={onPress}/>
  //       // </View>
  //       // <View style={[styles.buttonContainer,{justifyContent:'center'}]}>
  //       //   <MathButtons value={0} onPress={onPressReset}/>
  //       // </View>
  //     }
  //   </SafeAreaView>
  // );
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerStyle: {
    maxWidth: '100%',
    height: 200,
    borderRadius: 20,
    borderColor: 'black',
    borderBottomWidth: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  headerImageStyle: {
    maxWidth: '100%',
    height: 195,
    borderRadius: 20,
  },
  footerStyle: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    color: 'black',

    borderRadius: 20,
    borderColor: 'black',
    borderTopWidth: 5,

    marginTop: 30,
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
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    // height:50
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 32,
  },
});

export default App;
