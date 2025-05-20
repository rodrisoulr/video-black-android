import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <VideoPlayer 
        source="https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/7/index.m3u8?Expires=1747862623&Key-Pair-Id=K23COT2V2EOJI0&Signature=M66uOrdL4RG7IoPiHsTOKfg0o8CJhntfac7kl-JJWz9wZj5r3H1pbnOyLCIU8yhMLUuKBRSBa5QhjqADxXhXO09~jrOLhaLJZ-~K-1M70VD5HpRQCqDMt7AbwB~4mPE1mM5hiBpIcLBLePG7wYXcG8Rl-VGSSkKv8M2Z~JOAh8BMwh2bDSkxOsYrEFrXXtrASWVU-mkii~WieICCjoEZwA5yNssymOga2Dsoo8M82fQm1I~1FibVQpY65LXj6WwYNQGqWMkcIuBUyN8q2A7ChHPqATaoLIBxDWFaWcJ4X47Xf-gu~qKXX5jxR1fx1XPCADsLarzbaN7vMVEbTh-yuQ__"
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
