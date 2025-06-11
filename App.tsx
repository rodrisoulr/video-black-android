import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <VideoPlayer 
        source="https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/6/index.m3u8?Expires=1749735690&Key-Pair-Id=K23COT2V2EOJI0&Signature=bmtToEysQLdBD3dMjnO0HrG0cU5WppVa6KANODr0axrKvv~GWwu75mUn6Oic7XQDXE81VU3EceO6uIBKjbXG9NgfEI98Gt3ElJl9zxtz7EDWa5OmRM6WaNXFdTD~zrRp1TQlAPggHgLKNgeRKmmLEE45gSTtoRur1KC7Xxeb4RiMnl3Cmpj08r5UZNNUFzPomcCAJwTS-Np6Arxd9OJ5xPwC6cx2zW5LaErmnkyi~Ta5f7CYizzuaExA5sCCY7S~hZZAl3XmtylZp56YEitT3JtaRrY3AjLndU07SQykLGy80LBwoaf7AVmCBZ2KvgJUa2d7db09xscQuA~aRc74Fw__"
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
