import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { VideoPlayer } from './video-player';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <VideoPlayer 
        source="https://5gsht45h4h24tgfjy-mobile.ext.bibly.com/community/comun_ruegrccT6WcZAUHZ97UM1234/video/6/index.m3u8?Expires=1747697748&Key-Pair-Id=K23COT2V2EOJI0&Signature=eqZQTwXgfSCUYBCldZ~FaOSuvcnbhhHRBvyw2yJAuh4arf2AKbME3MAmseDGO7y8Efp5OEdW9nV4jvT932Q6g6SdGNpaptBJJJ7kzvUrQnP~CWf2RExoGZp-jMHcYKvw9IIhjatSJE2GByBYuAY0vFGVO5MryS-yF6IwMJn~6okFfX6U6SYuSq1T8~pqwl0Nv6e~t6APJL7YnnIrmKomCmqkQ8VUQk7-QmOY0N0eGuFOLHSi4Mkrk~QprDqk0va0tcGp8nI2pN2nnGO3XlOW5KxPXNLIbs4k6ALUKMdjE2wSvhuXYnrq-~LtwP5wQqNkQlxujlVBOCM3HV7nlthxeg__"
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
