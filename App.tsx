import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <VideoPlayer 
        source="https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/6/index.m3u8?Expires=1749816903&Key-Pair-Id=K23COT2V2EOJI0&Signature=boUUf7lxwPIvzouYrAmf43lSBlXGtP3BT5M-kwptIxPylVsoe-6H6zkADEaUQiWlXjVBaYg2Y6F0Ejrfk9ut1IAtaAttmeGlitEiltwMQuZIpMWmShnWdd0~0evYir5e2U5JwtfsvBAWY5-A-KnZZ5BnzuSA-YdzY8rfhoRRTUlgkeDlmIHzHJqfMo4tqG7ee1BgPDjF3oZuULhU5reGHqMMQocGxiqu6cnkI5AlOqAKhNtyHanq7O47q-1QGLF3yC25OzBGHeuXuYvLuFvTD2TcWXFnHco380lo40llSdkbLwLpbXlwbTyz9212F0TjZn29unWV~mwy95sk3co1yg__"
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
