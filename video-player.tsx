import { StyleSheet, ViewProps } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

export function VideoPlayer({
  source,
  autoplay,
}: ViewProps & {
  source: string;
  autoplay?: boolean;
}) {
  const player = useVideoPlayer(source, (initPlayer) => {
    initPlayer.seekBy(0);
    autoplay && initPlayer.play();
  });

  return <VideoView
            allowsFullscreen
            allowsPictureInPicture={false}
            player={player}
            style={styles.video}
        />
}

const styles = StyleSheet.create({
  video: {
    height: 400,
    width: '100%',
    backgroundColor: 'red'
  },
});
