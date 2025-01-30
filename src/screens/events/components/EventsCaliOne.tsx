import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltOneProps {}

const EventsCaliOne: FC<EventsTiltOneProps> = (): React.JSX.Element => {
  return (
    <View style={{ position: 'absolute', bottom: 250 }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 32,
          color: Colors.white,
          fontWeight: '900',
        }}
      >
        {'Семейный\n' +
          'Бранч'}
      </Text>
      <Text
        style={{
          padding: 10,
          backgroundColor: Colors.yellowButton,
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 22,
          color: Colors.white,
        }}
      >
        {'Приглашаем вас и ваших близких на "Семейный Бранч" в воскресенье!'}
      </Text>
      <Text
        style={{
          textAlign: 'right',
          fontSize: 22,
          fontWeight: '900',
          padding: 20,
          color: Colors.black,
        }}
      >
        25.06 17:00
      </Text>
    </View>
  );
};
export default EventsCaliOne;
