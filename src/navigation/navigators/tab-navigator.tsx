import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { TabRoutes, TabRoutesProps } from '../routes/tab-route';
import { LogBox, SafeAreaView, View } from 'react-native';
import React from 'react'
import { BookIcon, HomeIcon, PersonIcon } from '../../assets/icons';
import { AppNavigator } from './app-navigator';

import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../routes/app-routes';

LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator<TabRoutesProps> ();


export const BottomTabs = () => {
    const navigation = useNavigation();
     return(
     <Tab.Navigator screenOptions={{title:"Home Title"}}>
        <Tab.Screen
         name = {TabRoutes.Home}
          component={() => <SafeAreaView style={{flex:1, backgroundColor:'lightpink',justifyContent:'center',alignItems:'center'}}>
            <Pressable 
            style={{backgroundColor:'lightgreen',width:50,height:50}}
            onPress={() => navigation.navigate(AppRoutes.Home)}
            />
            </SafeAreaView>}
          options={{tabBarLabel:'Home',tabBarIcon:()=><HomeIcon width={20} height={20}/>, headerShown:false,}}
          />
        <Tab.Screen 
        name = {TabRoutes.Books} 
        component={()=><View style={{flex:1,backgroundColor:'lightgreen'}}
        />}
        options={{tabBarLabel:'Books',tabBarIcon:()=><BookIcon width={20} height={20}/>}}
        />
        <Tab.Screen 
        name = {TabRoutes.Account} 
        component={()=><View style={{flex:1,backgroundColor:'lightpink'}}/>}
        options={{tabBarLabel:'Profile',tabBarIcon:()=><PersonIcon width={20} height={20}/>}}
        />
    </Tab.Navigator>
     );
    }
