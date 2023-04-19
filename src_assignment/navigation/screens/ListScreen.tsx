import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListRenderItemInfo, Pressable, Text, View} from 'react-native';
import {HomeIcon} from '../../../src/assets/icons';
import {BottomRoutes} from '../routes/bottom-route';
import {PersonIcon} from '../../../src/assets/icons';
import {FlatList} from 'react-native-gesture-handler';
import {Post} from '../../../src/types/Props';
import CardComponent from '../../components/CardComponent';
import {CardProps} from '../../types/CardProps';
import {AppRoutes} from '../routes/app-routes';

const data: Post[] = [
  {
    id: 1,
    image: require('../../assets/inception.jpg'),
    title: 'Inception (2010)',
    description:
      "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
  },
  {
    id: 2,
    image: require('../../assets/parasite.jpg'),
    title: 'Parasite (2019)',
    description:
      'The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.',
  },
  {
    id: 3,
    image: require('../../assets/interstellar.png'),
    title: 'Interstellar (2014)',
    description:
      'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
  },
];

export const ListScreen = () => {
  const navigation = useNavigation();
  const renderCardComponent = ({item}: ListRenderItemInfo<CardProps>) => {
    return (
      <CardComponent
        prop={item}
        onPress={() => navigation.navigate(AppRoutes.DetailsScreen, item)}
      />
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        marginTop: 60,
      }}>
      <FlatList
        data={data}
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
    </SafeAreaView>
  );
};

export default ListScreen;
