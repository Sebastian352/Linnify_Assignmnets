import {Pressable, SafeAreaView, Text} from 'react-native';
import {HomeIcon} from '../../../src/assets/icons';
import {BottomRoutes} from '../routes/bottom-route';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
      }}>
      <Pressable
        style={{width: 100, height: 100}}
        onPress={() => navigation.navigate(BottomRoutes.Home)}>
        <HomeIcon />
      </Pressable>
      <Text style={{fontSize: 32, color: 'black'}}>Profile</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
