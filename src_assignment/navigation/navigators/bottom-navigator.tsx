import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomRoutes, BottomRoutesProps} from '../routes/bottom-route';
import {useNavigation} from '@react-navigation/native';
import {
  LogBox,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Image} from 'react-native-svg';
import {HomeIcon, PersonIcon, PlusCircleIcon} from '../../../src/assets/icons';
import {AppRoutes} from '../routes/app-routes';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import QrScreen from '../screens/QrScreen';

const Tab = createBottomTabNavigator<BottomRoutesProps>();
const logConsole = () => console.log('pressed');

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          ...styles.bottomTab,
          paddingBottom: 10,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name={BottomRoutes.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused, color}) => {
            let size: number;
            if (focused) {
              size = 20;
            } else {
              size = 15;
            }
            return (
              <Text style={{fontSize: size, color: color, fontWeight: 'bold'}}>
                Home
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            let size: number;

            if (focused) {
              size = 60;
            } else {
              size = 40;
            }
            return (
              <HomeIcon
                width={size}
                height={size}
                style={{color: focused ? 'tomato' : 'gray'}}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}></Tab.Screen>
      <Tab.Screen
        name={BottomRoutes.QR}
        component={QrScreen}
        options={{
          tabBarLabel: ({focused, color}) => {
            let size: number;
            if (focused) {
              size = 20;
            } else {
              size = 15;
            }
            return (
              <Text style={{fontSize: size, color: color, fontWeight: 'bold'}}>
                QR
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            let size: number;

            if (focused) {
              size = 60;
            } else {
              size = 40;
            }
            return (
              <PlusCircleIcon
                width={size}
                height={size}
                style={{color: focused ? 'tomato' : 'gray'}}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}></Tab.Screen>
      <Tab.Screen
        name={BottomRoutes.Profile}
        component={ProfileScreen}
        options={{
          tabBarLabel: ({focused, color}) => {
            let size: number;
            if (focused) {
              size = 20;
            } else {
              size = 15;
            }
            return (
              <Text
                style={{
                  fontSize: size,
                  color: color,
                  fontWeight: 'bold',
                }}>
                Profile
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            let size: number;

            if (focused) {
              size = 60;
            } else {
              size = 40;
            }
            return (
              <PersonIcon
                width={size}
                height={size}
                style={{color: focused ? 'tomato' : 'gray'}}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    position: 'absolute',
  },
});
