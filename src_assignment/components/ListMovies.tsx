import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ListRenderItemInfo,
  TextInput,
} from 'react-native';

import {CardProps} from '../types/CardProps';
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {CardComponentRef} from '../types/CardComponentRef';
import {Post} from '../../src/types/Props';
import CardComponent from './CardComponent';
import {searchHook} from '../../src_assignment_week7/hooks/use-search-hook';
import { useNavigation } from '@react-navigation/native';
import DetailsScreen from '../navigation/screens/DetailsScreen';
import useMovieStore, { MovieState } from '../../src_assignment_week7/store/useMovieStore';
import { AppRoutes } from '../navigation/routes/app-routes';

interface CardProp {
  prop: CardProps;
  onPress: () => void;
}

const fixedData: Post[] = [
  {
    id: 1,
    image: require('../assets/inception.jpg'),
    title: 'Inception (2010)',
    description:
      "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
  },
  {
    id: 2,
    image: require('../assets/parasite.jpg'),
    title: 'Parasite (2019)',
    description:
      'The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.',
  },
  {
    id: 3,
    image: require('../assets/interstellar.png'),
    title: 'Interstellar (2014)',
    description:
      'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
  },
];

export const ListMovies = () => {
  const navigation = useNavigation();
  const renderCardComponent = ({item}: ListRenderItemInfo<CardProps>) => {
    return <CardComponent prop={item} onPress={() => {navigation.navigate(AppRoutes.DetailsScreen)}} />;
  };
  // const [filteredData, setFilteredData] = useState<Post[]>(fixedData);
  const [searchQuery, setSearchQuery] = useState('');
  const data = searchHook(fixedData, searchQuery, 'title');
  const {movie, setCurrentMovie}=useMovieStore((state:MovieState) => ({movie:state.movies, setCurrentMovie:state.setCurrentMovie}));
  // useEffect(() => {
  //   setFilteredData(data);
  // }, [data]) 

  return (
    <View style={style.container}>
      <TextInput
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={style.textInput}></TextInput>
      <FlatList
        data={movie}
        renderItem={renderCardComponent}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              height: 30,
              backgroundColor: 'lightblue',
            }}></View>
        )}
        ListHeaderComponent={() => (
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'lightblue',
            }}></View>
        )}
        ListFooterComponent={() => (
          <View
            style={{
              width: '100%',
              height: 30,
              backgroundColor: 'lightblue',
            }}></View>
        )}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
  },
  textInput: {
    width: 380,
    marginTop: 30,
    height: 50,
    color: 'black',
    backgroundColor: 'lightgreen',
    borderColor: 'black',
    borderWidth: 3,
    paddingLeft: 10,
  },
});

export default ListMovies;
