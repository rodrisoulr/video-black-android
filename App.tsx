import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';
import { VideoSource } from 'expo-video';

const videoSource: VideoSource = {
  uri: 'https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/4/index.m3u8?Expires=1750518563&Key-Pair-Id=K23COT2V2EOJI0&Signature=FP2eHLgZxMEDT9C4He~zQx9TrtOyXnCi~3gPzQctF7fkWjora9wGy3vPENB24DgD-zFEUhHdqtB-LWotV1IuLtkdqJwh2z6JYcy~~8lpZMW5Dp6uIx2AyY-zIuVf8dTJfwlx1xNS3rinjTTcXvPOx278H~CHPNkgA1aFpD5Ys~khfXxnGH7JZ~nAMdPzuQ96DmgwPwZ0p9QyIDDodZHZ6iAp8KGBiz2q8fU8kTq1r-SyOD8xgH9dAjNr7884RJL8HU3~ahSW-Ls77fOl1B1wuJZX-S8~QeKxdYHH5StQLUqUS320XorKhm2F0iPKD5di7E3VXsaxWQ2wcUjPIBN9sA__',
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
