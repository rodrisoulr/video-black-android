import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <VideoPlayer 
        source="https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/6/index.m3u8?Expires=1749645207&Key-Pair-Id=K23COT2V2EOJI0&Signature=RVh88qpBDL5J531FznP3k4b3qs~feD7jP-4yeBnoZ6paF0J~FqYWa2pHkEQ8rDUIWCHsv~dFazFZfzDAm60fuaws1vyx7avdRAdQ0sRfujV1Aecvu40oXZrkNf74SUUsOoDP8SbCePsZRLBLFdK9T8KbxPsy6jmj4ohcPeTOk89EZPpXlj5lQbuZfXg5wQhUNIXeGVXJcPG2vJtOPKQSe9or0QqLDvxduiqISwAPTDCfqYzaW84bDO8AK6-M2lWGO7B70kyBf67wecIxFOR6EPRfMcCJReLxzX5euND4bD9RPWyHOWm6tqypavJxM6dxEJmYhYZCM8DnacaPcVEAtg__"
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
