import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {HomeIcon} from '../../../src/assets/icons';
import {BottomRoutes} from '../routes/bottom-route';
import {PersonIcon} from '../../../src/assets/icons';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {Post} from '../../../src/types/Props';
import CardComponent from '../../components/CardComponent';
import {CardProps} from '../../types/CardProps';
import {AppRoutes} from '../routes/app-routes';
import {useEffect, useState} from 'react';
import {searchHook} from '../../../src_assignment_week7/hooks/use-search-hook';
import SearchBar from '../../components/SearchBar';
import ListMovies from '../../components/ListMovies';
import {MMKV} from 'react-native-mmkv'
import { getMovies as fetchMovies} from '../../../src_assignment_week7/services/movie.service';

export const ListScreen = () => {
const storage = new MMKV();
storage.set("anykey","secret");


  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        marginTop: 60,
      }}>
      <ListMovies />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TextInput: {
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

export default ListScreen;
