import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltTreeProps {}

const EventsCaliTree: FC<EventsTiltTreeProps> = (): React.JSX.Element => {
  return (
    <View
      style={{
        position: 'absolute',
        top: '70%',
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Colors.yellowButton,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 42,
          color: Colors.white,
          fontWeight: '900',
        }}
      >
        Коктейльная
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '900',
          fontSize: 32,
          color: Colors.white,
        }}
      >
        Вечеринка
      </Text>
      <Text
        style={{
          paddingHorizontal: 20,
          marginTop: 16,
          textAlign: 'left',
          fontSize: 28,
          fontWeight: '800',
          color: Colors.white,
        }}
      >
        05.07 22:00
      </Text>
    </View>
  );
};
export default EventsCaliTree;
