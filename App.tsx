import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <VideoPlayer 
        source="https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/4/index.m3u8?Expires=1749564499&Key-Pair-Id=K23COT2V2EOJI0&Signature=GIuegPYGKN9BnpaUdxTqmLeHsi90AAI0fY0qJmqYVO045OFjZsNDvsgr4Brh7XJqae~3lO~V0AuljRn1Bb~DnVu8zIeBQ7t3XR38iG-a1aDTOfxOjEuLIl-ObO5NksSqJbSBVgd6TUSII54iGh5kHa~U3o8cW1NhqvbYeCuL8ROeIYposHkkD9R7PJO39X00dWaxA4buqIuRL30fj5M6rngCSDX4uCcS1-95TIjSexUW6oYxEMRQuF7YPTeZ047rUyYSDD5v6IuZLdAonmBBjEwF0ABDpMDe6J0~WL7DL~0jgKdcFOK94P2oaLHXQx4dd0PBwJ-CG-HgYeUnZWVdNg__"
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
