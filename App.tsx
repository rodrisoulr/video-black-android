import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';
import { VideoSource } from 'expo-video';

const videoSource: VideoSource = {
  uri: 'https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/7/index.m3u8?Expires=1749924748&Key-Pair-Id=K23COT2V2EOJI0&Signature=Wau4ayOMAu8oj2jcTcSwzLaX4D1odGdB-yuRhNSvtPJfcYTUIxeqH~MaTihNFsUkoak8bdNG0Y7AX315qzVi78N-RVUYSyNSOS~Q6RAd50zJ0DyTFFHVqzOQHgKX9qu0c-3h2Y7ogMyBRDPp8tZJgj6se72O5o1uni6AogqxJK70N8e98V-nb~pW9fvj3UMTEkCTLpGndXlmEsHaCkVhYKtvuD1jnMsVx4CoZvkir2hc0UZGUdpz88hvN~rL07B-~WZc0SKnI8bqAOVkrtF1jyUSWpJPNzxcKdTlKvfpcONo3SNpiyliocI5~UUGCBqw~mS5ZE4IkdNeM0qo43eOlw__',
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
