import { Platform, /*NativeModules*/ } from 'react-native';

// const { iosPlayer, androidPlayer } = NativeModules;

export async function play(track) {
  console.log('playTrack', track);
  if (Platform.OS === 'android') {
    //  run iosPlayer
  } else if (Platform.OS === 'ios') {
    // run androidPlayer
  }
}

export async function pause(track) {
  console.log('pauseTrack ', track);
  if (Platform.OS === 'android') {
    //  run iosPlayer
  } else if (Platform.OS === 'ios') {
    // run androidPlayer
  }
}
