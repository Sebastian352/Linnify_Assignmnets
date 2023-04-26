import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {PersonalInfoRef} from '../types/PersonalInfoRef';

export const PersonalInfoImperative = forwardRef(
  (props, ref: ForwardedRef<PersonalInfoRef>) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [faculty, setFaculty] = useState('');
    const [year, setYear] = useState('');

    const [borderColor, setBorderColor] = useState('black');

    useImperativeHandle(
      ref,
      (): PersonalInfoRef => ({
        getData: () => ({firstName, lastName, faculty, year}),
        setData: (fn: string, ln: string, fclty: string, yr: string) => {
          setFirstName(fn), setLastName(ln), setFaculty(fclty), setYear(yr);
        },
        setBorderColor: (bc:string) =>{setBorderColor(bc)}
      }),
    );

   

    const onPress = () => {
      console.log();
    };

    return (
      <View style={styles.container}>
        <View style={styles.separator} />
        <View style={styles.inputsContainer}>
          <TextInput
            style={[styles.TextInput, {borderColor: borderColor}]}
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={[styles.TextInput, {borderColor: borderColor}]}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.inputsContainer}>
          <TextInput
            style={[styles.TextInput, {borderColor: borderColor}]}
            value={faculty}
            onChangeText={setFaculty}
          />
          <TextInput
            style={[styles.TextInput, {borderColor: borderColor}]}
            value={year}
            onChangeText={setYear}
          />
        </View>
        <View style={styles.separator} />
      </View>
    );
  },
);

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
    padding:5,
  },
});

export default PersonalInfoImperative;
