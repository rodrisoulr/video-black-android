import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <VideoPlayer 
        source="https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/7/index.m3u8?Expires=1747519640&Key-Pair-Id=K23COT2V2EOJI0&Signature=m88m9GWFbZ3Sly2LpSfb-inVS-9DZOIyu0~xonTZHx1fjog94ZCPhzmzXP7hj4X3mBTc8r3ICaRu~XyES84QP15r23UPD6Eju6G8CeiO-M9QVM6Dvmf4NOSwQ5wcAO7rZ8jGSVwqIOlB12oP--1DxbDSiJFpXaX2bd6rj5tGPjofxetdCDmX~r4M0SqJxg~F-yAQxJPsN5XF-FMg2NDiwNOn02IhvbPFIcDasj-ku4YKCZWZLOanC5i02QjyJLvm1bMCPIq~rineFr5PKpjGUOy21Q-c547r6LgFXHz86m2bfUGDNy4sKUg4iTRzs0MfnEMmogpeKts0BK0tIPvH1w__"
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
