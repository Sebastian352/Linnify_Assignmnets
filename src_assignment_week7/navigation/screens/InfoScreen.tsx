import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {PersonalInfoImperative} from '../../components/PersonalInfoImperative';
import {PersonalInfoRef} from '../../types/PersonalInfoRef';
import {useRef} from 'react';
import {Text} from 'react-native-svg';

const InfoScreen = () => {
  const infoScreenRef = useRef<PersonalInfoRef>(null);
  const onPress = () => {
    console.log('pressed');
    console.log(infoScreenRef.current?.getData());
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <PersonalInfoImperative ref={infoScreenRef} />
      <View
        style={{
          width: '100%',
          height: 250,
          backgroundColor: 'lightblue',
          alignItems: 'center',
        }}>
        <Pressable style={styles.buttonStyle} onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  inputsContainer: {
    backgroundColor: 'light',
    width: '100%',
    padding: 30,
  },
  buttonStyle: {
    width: 100,
    height: 30,
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    borderColor: 'black',
  },
  separator: {
    backgroundColor: 'lightblue',
    width: '100%',
    height: 50,
  },
  TextInput: {
    color: 'black',
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    backgroundColor: 'white',
  },
});

export default InfoScreen;
