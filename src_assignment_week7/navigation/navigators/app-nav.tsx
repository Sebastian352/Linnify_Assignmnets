import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {UmbrellaIcon, HamburgerIcon} from '../../../src/assets/icons';
import Texts from '../../../src/components/texts';
import {useNavigation} from '@react-navigation/native';
import {AppRouteProps, AppRoutes} from '../routes/app-route';
import {PersonalInfo} from '../../components/PersonalInfo';
import InfoScreen from '../screens/InfoScreen';
const Stack = createStackNavigator<AppRouteProps>();

export const AppNavigatorInfo = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={AppRoutes.PersonalInfo}
        component={PersonalInfo}></Stack.Screen> */}
      <Stack.Screen
        name={AppRoutes.PersonalInfoImperative}
        component={InfoScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  headerRight: {
    flex: 1 / 3,
    alignItems: 'flex-end',
    marginRight: 15,
  },

  headerLeft: {
    flex: 1 / 3,
    alignItems: 'flex-start',
    marginLeft: 15,
  },
});
