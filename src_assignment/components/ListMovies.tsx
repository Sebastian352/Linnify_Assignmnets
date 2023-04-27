import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ListRenderItemInfo,
  TextInput,
  ActivityIndicator,
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
import {getMovies as fetchMovies} from '../../src_assignment_week7/services/movie.service'

interface CardProp {
  prop: CardProps;
  onPress: () => void;
}



export const ListMovies = () => {

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page,setPage] = useState(1);
  const [endOfPage,setEndOfPage] = useState(false);
  const [refreshing, setRefresing] = useState(false);

  const navigation = useNavigation();
  const renderCardComponent = ({item}: ListRenderItemInfo<CardProps>) => {
    return <CardComponent prop={item} onPress={() => {setCurrentMovie(item),navigation.navigate(AppRoutes.DetailsScreen)}} />;
  };
  // const [filteredData, setFilteredData] = useState<Post[]>(fixedData);
  const [searchQuery, setSearchQuery] = useState('');
  //const data = searchHook(fixedData, searchQuery, 'title');
  const {movie, setCurrentMovie,getMovies}=useMovieStore((state:MovieState) => ({movie:state.movies, setCurrentMovie:state.setCurrentMovie, getMovies: state.getMovies}));
  // useEffect(() => {
  //   setFilteredData(data);
  // }, [data]) 

  const oER = () => {
    if(!loading && !loadingMore)
      setPage(page+1);
      
    console.log('Page: ',page);
  }

  const oR = () =>{
    if(!loading && !loadingMore)
      setPage(1);
    console.log('Refreshed',page);
  }

  const handleFetch = async()=>{
    const data = await fetchMovies(5,page);
    if(!data){
      setEndOfPage(true)
    }
    getMovies([...movie,...data]);
  }

  useEffect(()=>{
    if(!endOfPage){
      handleFetch();
    }
    setLoading(false);
    setLoadingMore(false);
    setRefresing(false)
    },[page]);


  return (
    <View style={style.container}>
      <TextInput
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={style.textInput}></TextInput>
      <FlatList
        data={movie}
        renderItem={renderCardComponent}
        keyExtractor={(item,index) => index.toString()}
        contentContainerStyle={!movie.length ? {flex:1,justifyContent:'center', alignItems:'center'}: {}}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              height: 30,
              backgroundColor: 'lightblue',
            }}></View>
        )}
        onEndReached={oER}
        onEndReachedThreshold={0.5}
        onRefresh={oR}
        refreshing={refreshing}
        ListHeaderComponent={() => (
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'lightblue',
            }}></View>
        )}
        ListEmptyComponent={() =>(
            <ActivityIndicator size={'large'}/>
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
