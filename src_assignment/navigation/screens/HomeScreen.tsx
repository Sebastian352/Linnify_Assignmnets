import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Pressable, Text} from 'react-native';
import {HomeIcon} from '../../../src/assets/icons';
import {BottomRoutes} from '../routes/bottom-route';
import {PersonIcon} from '../../../src/assets/icons';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
      }}>
      <Pressable
        style={{width: 100, height: 100, backgroundColor: 'lightblue'}}
        onPress={() => navigation.navigate(BottomRoutes.Profile)}>
        <PersonIcon />
      </Pressable>
      <Text style={{fontSize: 32, color: 'black'}}>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
