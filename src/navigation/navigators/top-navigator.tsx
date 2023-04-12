import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { TopRoutes, TopTabRoutesProps } from '../routes/top-tab-routes';
import { TabRoutes } from '../routes/tab-route';
import { View,Text } from 'react-native';

const Tab = createMaterialTopTabNavigator<TopTabRoutesProps>();

export const TopTabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen
            name = {TopRoutes.Home}
            component = {() => <View style={{flex:1,backgroundColor:'lightblue'}}></View>}
            />
            <Tab.Screen
            name = {TopRoutes.Account}
            component = {() => <View style={{flex:1,backgroundColor:'pink'}}></View>}
            />
        </Tab.Navigator>
    );
}