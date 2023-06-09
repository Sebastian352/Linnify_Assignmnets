import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {AppRouteProps, AppRoutes} from '../routes/app-routes';
import { TopTabs } from './top-navigator';

const Stack = createStackNavigator<AppRouteProps>();
export const AppNavigator = () => {
  return (
  
    <Stack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#957DAD'}}}>
      <Stack.Screen
        name={AppRoutes.Login}
        component={TopTabs}
        options={({navigation, route}) => ({
          title: 'Welcome',
          headerTransparent: false,
          headerRight: () => (
            <Pressable style={{width:25, height:25, backgroundColor:'green'}} onPress={() => navigation.navigate(AppRoutes.Home)}/>
          )
        })}
      />
      <Stack.Screen
        name={AppRoutes.Home}
        component={() => <View style={{flex:1, backgroundColor:'blue'}}/>}
        options={({navigation, route}) => ({
          title: route.params?.title,
          headerTitle: () => null,
        })}
      />
    </Stack.Navigator>
  );
};
{
  /*
    Custom Bottom Tab Bar //floating 
    Cu 3 Ecrane diferite modularizate  cu un title in mijloc la fiecare ecran
    Header care sa aiba border colorat rounded cu hamburger icon => te duce pe un nou ecran cu lista si cand dai click pe un card te duce 
    pe alt ecran unde faci un ecran cu details si trimitem prin parametrii de navigare ce card avem nevoie
    stack cu 3 ecrane si bottom tab cu 3 ecrane
    Sa incerci mai multe optiuni si dupa sa le comentezi 

  */
}