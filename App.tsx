import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';
import { VideoSource } from 'expo-video';

const videoSource: VideoSource = {
  uri: 'https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/4/index.m3u8?Expires=1750430186&Key-Pair-Id=K23COT2V2EOJI0&Signature=s3rxcj45cqxgVUrju1vFzWszWHbk9K-zEtypMaadwlt~9Z-pF5cBvwAZLRhHKDl69sZNd9Ytgo4LyBtFFFqXk3ChNU4gJ~DhCMulbALcb10gNln4qByhE2LsvFxJCytIUMfVr8Rmhyh4YLTmj407DZ-VAqyreN50oPmpDWoKIkaCxO6RTOSCRQpBmfZ1gSHeJQjJyr5-nGr7VzO1RB7lVLcv3yjCuza5LNvSEFd22jdiKPxkZCO5ylYKSIgGXj65Iw4IHIoBSOX2RwXMszdJrhDXoNwf34BBlr1S5HEWOpUXs5dXaajsE3eBeT~mp0S9RKvmE1WIyC7erqspoOXmzA__',
  contentType: 'hls',
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <VideoPlayer
        autoplay
        source={videoSource}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
