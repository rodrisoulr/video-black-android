import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';
import { VideoSource } from 'expo-video';

const videoSource: VideoSource = {
  uri: 'https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/4/index.m3u8?Expires=1750344903&Key-Pair-Id=K23COT2V2EOJI0&Signature=v4pEQt9XDojzXgnxMFmF45yxHzEf50YgHyyI1kp0LvDbDpPOY3JHc0m~xgN-0nNkdAdRx6WSVQN0gYJd3LL-gtKxApQrrLieVYVKwVYW~H5ZXcoXGzuf5g~1l0rye3gB1VSUiNhpR601pA4u~pSrcqdDBjagsmHv6Re5VibQwKiLfjbdiju1ogJBKs9f3dM6ZQEwEO4HNm77Koee~5Wtkk4fuxnQqPCgRgIGE~1vuOmSJAwlj~peGN2zGUfuMYrqjRm1dSiiKIDqJK-FeJe3ekKfr0ChRwQLpmz~iG8Ok7IkEGymNqPohza-IINkyRWzlF6uVYnJX19iznxsNwmkpA__',
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
