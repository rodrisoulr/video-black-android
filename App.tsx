import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';
import { VideoSource } from 'expo-video';

const videoSource: VideoSource = {
  uri: 'https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/4/index.m3u8?Expires=1750221198&Key-Pair-Id=K23COT2V2EOJI0&Signature=usAVqDpbaijHuB6Fc6mcilOKJ9F3z6RzHN61-LhyLbD9OSw~hsyF6PhuElbU51Mg9aHuv~R4OloYo1quU6rEYT~qPQu6w7okPz8xPl-gSQO9J4vahoIJEuijtLQsCe~VDaMeHpPZmErGUX-rWKNgoPsytmsvZYZ9tX2vGXURR~kq-2dAhOU4fSAVQzicUHNjwACJpc1B7PVKi1NMlP3U7uUp3zzj~sexnQpf77vgVX6klMJUnZntffunxvDWWPcQqOSV6pSEmyVmekeSY3eAA3V801cJrWA25rmtSINKiFfiYA1o2oc8Yn-xRMEuUEVHfHCqlNX2lfOODhXZ-Mgp8g__',
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
