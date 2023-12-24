import { StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState } from "react";


export default function FavoritesListScreen({ navigation }) {
  
  const [data, setData] = useState([]);

  fetch('https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=054e19ef2f18ef61125f555cf4e66993&user_id=66956608%40N06&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(json =>
      setData(json.photos.photo))

  return (<View style={styles.container}>
    <FlatList
      horizontal={false} numColumns={2} data={data} keyExtractor={(item) => item.id} renderItem={({ item, index }) => {
        return (<View style={{ flexDirection: 'row', padding: 2, }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('DownloadPhoto', {img: item.id, data: data})
          }}>
            <Image
              style={{ width: 170, height: 130, }} source={{ uri: item.url_l }}></Image>
          </TouchableOpacity>
        </View>)
      }}></FlatList>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
