import {SafeAreaView, View} from 'react-native';
import {PersonalInfo} from '../../components/PersonalInfo';

const InfoScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PersonalInfo />
    </SafeAreaView>
  );
};

export default InfoScreen;
