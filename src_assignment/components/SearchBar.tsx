import {TextInput} from 'react-native-gesture-handler';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {useDebounce} from '../hooks/use-debounce.hook';
import {networkStatus} from '../hooks/use-network-status.hook';
import {searchHook} from '../../src_assignment_week7/hooks/use-search-hook';
import {Post} from '../../src/types/Props';

export const SearchBar = () => {
  const [text, changeText] = useState('');

  const searchVal = useDebounce<string>(text, 300);
  const internet = networkStatus();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <TextInput
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={style.textInput}></TextInput>
  );
};

const style = StyleSheet.create({
  textInput: {
    width: '100%',
    marginTop: 22,
    height: 50,
    color: 'black',
    backgroundColor: 'lightgreen',
    borderColor: 'black',
    borderWidth: 3,
    paddingLeft: 10,
  },
});

export default SearchBar;
