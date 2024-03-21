import { StyleSheet, Text, View, Pressable } from 'react-native';
import usePlayer from './usePlayer';

export default function Player() {
  const { trackToPlay } = usePlayer();

  return (
    <View style={styles.navigationPanel}>
      <Pressable style={styles.button}>
        <Text>P</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text>N</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
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
