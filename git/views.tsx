import {StyleSheet, Text, View} from 'react-native';

export const MyViews = () => {
  const onLayout = e => {
    console.log(e.nativeEvent);
  };
  return (
    <View style={Styles.container} onLayout={onLayout}>
      <View style={Styles.rectangle1}></View>

      <View style={Styles.container2}>
        <View style={Styles.rectangle2}></View>
        <View style={Styles.rectangle3}></View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: 500,
    height: 500,
    flexDirection: 'column',
  },
  container2: {
    flexDirection: 'row',
  },
  rectangle1: {
    width: 200,
    flex: 1 / 2,
    backgroundColor: 'white',
  },
  rectangle2: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  rectangle3: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
export default MyViews;
