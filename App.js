// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Player from './components/Player';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/pitbullstudying_1.jpeg')} resizeMode='cover' style={styles.backgroundImage}>
        <Player />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#347aeb',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  }
});
