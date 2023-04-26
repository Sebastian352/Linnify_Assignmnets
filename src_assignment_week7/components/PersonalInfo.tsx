import {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const PersonalInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [faculty, setFaculty] = useState('');
  const [year, setYear] = useState('');

  const [borderColor, setBorderColor] = useState('black');

  useEffect(() => {
    let ok = false;
    if (firstName && lastName && faculty && year) {
      ok = true;
    }
    if (!ok) {
      setBorderColor('tomato');
    } else {
      setBorderColor('green');
    }
  }, [firstName, lastName, faculty, year]);

  const onPress = () => {
    console.log(firstName + ' ' + lastName + ' ' + faculty + ' ' + year);
  };

  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <View style={styles.inputsContainer}>
        <TextInput
          style={[styles.TextInput, {borderColor: borderColor}]}
          onChangeText={setFirstName}
          value={firstName}
        />
        <TextInput
          style={[styles.TextInput, {borderColor: borderColor}]}
          onChangeText={setLastName}
          value={lastName}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.inputsContainer}>
        <TextInput
          style={[styles.TextInput, {borderColor: borderColor}]}
          onChangeText={setFaculty}
          value={faculty}
        />
        <TextInput
          style={[styles.TextInput, {borderColor: borderColor}]}
          onChangeText={setYear}
          value={year}
        />
      </View>
      <View style={styles.separator} />
      <Pressable style={styles.buttonStyle} onPress={onPress} />
    </View>
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
