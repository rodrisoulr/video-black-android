import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';
import { VideoSource } from 'expo-video';

const videoSource: VideoSource = {
  uri: 'https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/4/index.m3u8?Expires=1750121098&Key-Pair-Id=K23COT2V2EOJI0&Signature=0rdYPMHIM24Yxw9HdRINyqE8eAthoxElVCHuFS371abC9dwiwPV5pb6-jfpvviWJkuyUb~GHAx5epnY7u0MfLSCub-yJ1gp5Ee2L~xCHmV9E6-nEhxJWMGIXlO1NQs2NjAQyNd1-~AY1G~TIoJpQOi3tPWOqm2FxBYUmSYTZgOFz4G7Y4QQAGAFn1NfLKae5~cz2PZoV2usuVILE7LT9W8Z4l-zcgwVsGPP4zqG~6DBcPqin8es67axBjm0d8~Dm-hkG82UHzP~aH5OvIDYgJzXWsy00ij6PMr~-pQa339S0XXQTYSGqBiJbZOzQWVs9Slpzjv9myIq~2R0h7f2KiQ__',
  contentType: 'hls',
};

console.log("preview")

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
