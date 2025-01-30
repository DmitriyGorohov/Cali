import { type FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltFourProps {}

const EventsCaliFour: FC<EventsTiltFourProps> = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingHorizontal: 20,
          fontSize: 32,
          color: Colors.yellowButton,
          fontWeight: '800',
        }}
      >
        Футбольный Фест
      </Text>
      <View
        style={{
          padding: 20,
          borderWidth: 1,
          marginTop: 20,
          borderColor: Colors.white,
          borderRadius: 20,
          backgroundColor: Colors.yellowButton,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 16,
            color: Colors.white,
            fontWeight: '500',
          }}
        >
          Смотрите важные матчи на большом экране, наслаждаясь специальным меню
          и напитками
        </Text>
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: Colors.white,
              fontWeight: '800',
            }}
          >
            10.07 - 22:30
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 200,
  },
});
export default EventsCaliFour;
