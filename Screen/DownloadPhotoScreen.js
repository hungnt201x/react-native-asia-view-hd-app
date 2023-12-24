import { StyleSheet, View, Image, ScrollView, Dimensions, Text } from 'react-native';
import { FloatingAction, } from "react-native-floating-action";
import { useState } from 'react';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const actions = [
  {
    text: "1080x1920",
    icon: require('../assets/downloadicon.png'),
    name: "1080x1920",
    position: 1
  },
  {
    text: "576x1024",
    icon: require('../assets/downloadicon.png'),
    name: "576x1024",
    position: 2
  },
  {
    text: "281x500",
    icon: require('../assets/downloadicon.png'),
    name: "281x500",
    position: 3
  }
];

export default function DownloadPhotoScreen({ route, navigation }) {
  const [imgActive, setImgActive] = useState(0)
  const img = route.params.img;
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}
        onScroll={({ nativeEvent }) => {
          const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
          if (slide != imgActive) setImgActive(slide)
        }}
        style={styles.wrap}>
        {data.map(function (img) {
          return (
            <View key={img.id} style={styles.wrap}>
              <Image source={{ uri: img.url_l }} alt="" style={{ width: '100%', height: '100%' }} resizeMode='center' />
            </View>
          );
        })}
      </ScrollView>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          console.log(`selected button: ${name}`);
        }}
      />
    </View >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT,
  }
});
