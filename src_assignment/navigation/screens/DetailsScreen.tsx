import {ListRenderItemInfo, Pressable, SafeAreaView, Text} from 'react-native';
import {HomeIcon} from '../../../src/assets/icons';
import {BottomRoutes} from '../routes/bottom-route';
import {useNavigation} from '@react-navigation/native';
import CardComponent from '../../components/CardComponent';
import {CardProps} from '../../types/CardProps';
import {Post} from '../../../src/types/Props';

const renderCardComponent = ({item}: ListRenderItemInfo<CardProps>) => {
  return <CardComponent prop={item} onPress={() => console.log('Press')} />;
};

const DetailsScreen = ({route}) => {
  const item: CardProps[] = [
    {
      id: route.params.id,
      image: route.params.image,
      title: route.params.title,
      description: route.params.description,
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
      }}>
      {
        //renderCardComponent(item)
      }
      <Text>{route.params.description}</Text>
    </SafeAreaView>
  );
};

export default DetailsScreen;
