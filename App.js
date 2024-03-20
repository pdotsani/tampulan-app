// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';
import { fetchTracks } from './api';

export default function App() {
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    try {
      const response = await fetchTracks();
      setTracks(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/pitbullstudying_1.jpeg')} resizeMode='cover' style={styles.backgroundImage}>
        <View style={styles.navigationPanel}>
          <Pressable style={styles.button}>
            <Text>P</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text>N</Text>
          </Pressable>
        </View>
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
  },
  navigationPanel: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    width: '100%',
    height: "auto",
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginRight: 20,
    width: 100,
    height: 100,
    borderRadius: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
