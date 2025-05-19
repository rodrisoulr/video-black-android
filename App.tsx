import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <VideoPlayer 
        source="https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/6/index.m3u8?Expires=1747777687&Key-Pair-Id=K23COT2V2EOJI0&Signature=Rz-0VUm2WF7ZsyG6yEWw~gtzaj4XIUzUyfZwrvk6zXHMb7bnR0GfzCAi31E8yGL03Y8oVPreoLpfABoU7iNex-Ab-TAPGfGBrsDqOANsbb1L-y-pdohE0mjuS6y~Aie-5LNSLX3YF4ValyIfn95Y4H9FIjd-TVWVQjgWG7e~fCJNHOJDuk-2zRseV8nJlsIDZYi6FKRx2ZoGHjNv~~qj5UY1keNJFAghxrY-UrXGmacFyfc4-BQKXPb8O0IMd0cUMOVDmEmWNUhrP0w2PXNvcG42s0UFWqeOQ5CrHcAsLEzJSbc3YoGOi7Vt1VftSFdBBXyTEX7vBnU8a13PZ8Ue8Q__"
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
