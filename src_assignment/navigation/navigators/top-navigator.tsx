import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopRoutes, TopTabRoutesProps} from '../routes/top-tab-routes';
import {Pressable, View} from 'react-native';

const Tab = createMaterialTopTabNavigator<TopTabRoutesProps>();

const onPress = () => console.log('pressed');

const component = () => {
  return (
    <Pressable
      style={{
        height: 100,
        width: 100,
        backgroundColor: 'lightblue',
      }}
      onPress={onPress}></Pressable>
  );
};

export const TopTabHamburger = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TopRoutes.Hamburger} component={component} />
    </Tab.Navigator>
  );
};
