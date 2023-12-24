import { StyleSheet, View, FlatList, Button, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesListScreen from './Screen/FavoritesListScreen';
import DownloadPhotoScreen from './Screen/DownloadPhotoScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="FavoritesList" component={FavoritesListScreen} />
        <Stack.Screen name="DownloadPhoto" component={DownloadPhotoScreen} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});
