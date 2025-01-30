import { type FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltFiveProps {}

const EventsCaliFive: FC<EventsTiltFiveProps> = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: 'center',
          width: '100%',
          fontSize: 24,
          borderRadius: 100,
          textAlign: 'right',
          color: Colors.yellowButton,
          fontWeight: '800',
          paddingHorizontal: 30,
        }}
      >
        Чемпионский Ужин
      </Text>
      <View style={{ width: '100%', paddingHorizontal: 10 }}>
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 16,
            paddingTop: 10,
            textAlign: 'right',
            color: Colors.white,
            fontWeight: '500',
          }}
        >
          Отметьте победы любимых команд за изысканным ужином. Специальное меню
          вдохновлено странами-участницами крупных футбольных турниров.
        </Text>
      </View>
      <View
        style={{ paddingHorizontal: 20, marginTop: 20, alignSelf: 'flex-end' }}
      >
        <Text
          style={{
            paddingHorizontal: 20,
            width: '60%',
            textAlign: 'center',
            fontSize: 30,
            color: Colors.yellowButton,
            fontWeight: '800',
          }}
        >
          20.07 - 20:00
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
  },
});
export default EventsCaliFive;
