import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TopTabHamburger} from './top-navigator';
import {BottomTabs} from './bottom-navigator';
import {UmbrellaIcon, HamburgerIcon} from '../../../src/assets/icons';
import Texts from '../../../src/components/texts';
import HomeScreen from '../screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import ListScreen from '../screens/ListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {ArrowIcon} from '../../assets/icons';
import { AppRouteProps, AppRoutes } from '../routes/app-routes';

const Stack = createStackNavigator<AppRouteProps>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: true,
        headerTransparent: true,
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
        header: () => {
          return (
            <View style={styles.headerStyle}>
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <ArrowIcon width={30} height={30} />
              </Pressable>
              <View
                style={{
                  alignItems: 'center',
                  flex: 1 / 3,
                }}>
                <UmbrellaIcon width={45} height={45} />
                <Text style={styles.textStyle}>Umbrella inc.</Text>
              </View>
              <Pressable
                style={styles.headerRight}
                onPress={() => navigation.navigate(AppRoutes.ListScreen)}>
                <HamburgerIcon width={30} height={30} />
              </Pressable>
            </View>
          );
        },
      })}>
      <Stack.Screen name={AppRoutes.Home} component={BottomTabs}></Stack.Screen>
      <Stack.Screen name={AppRoutes.ListScreen} component={ListScreen} />
      <Stack.Screen name={AppRoutes.DetailsScreen} component={DetailsScreen} />
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
