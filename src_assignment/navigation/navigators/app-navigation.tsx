import {createStackNavigator} from '@react-navigation/stack';
import {
  AppRouteProps,
  AppRoutes,
} from '/Linnify/AwesomeProject/src_assignment/navigation/routes/app-routes';
import {StyleSheet, View} from 'react-native';
import {TopTabHamburger} from './top-navigator';
import {BottomTabs} from './bottom-navigator';
import {UmbrellaIcon} from '../../../src/assets/icons';

const Stack = createStackNavigator<AppRouteProps>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'tomato'},
        headerShown: true,
        header: ({options}) => {
          return (
            <View style={styles.headerStyle}>
              <UmbrellaIcon width={30} height={30} />
            </View>
          );
        },
      }}>
      <Stack.Screen name={AppRoutes.Home} component={BottomTabs}></Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
