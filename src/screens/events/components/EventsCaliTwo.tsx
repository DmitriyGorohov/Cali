import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../styles/Colors.ts';

interface EventsTiltTwoProps {}

const EventsCaliTwo: FC<EventsTiltTwoProps> = (): React.JSX.Element => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 150,
          backgroundColor: Colors.yellowButton,
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          paddingVertical: 22,
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}
      >
        <View>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 32,
              color: Colors.black,
              fontWeight: '900',
            }}
          >
            {'Гриль'}
          </Text>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 22,
              fontWeight: '700',
              color: Colors.white,
            }}
          >
            {'и Барбекю'}
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'right',
            fontWeight: '800',
            fontSize: 22,
            color: Colors.white,
          }}
        >
          {'30 августа\n18:00'}
        </Text>
      </View>
      <View style={{ position: 'absolute', bottom: 100, alignSelf: 'center', paddingHorizontal: 40, }}>
        <Text
          style={{
            color: Colors.white,
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '700',
          }}
        >
          Добро пожаловать на наш праздник "Гриль и Барбекю"!
        </Text>
        <Text
          style={{
            color: Colors.white,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '400',
          }}
        >
          Откройте для себя искусство приготовления на открытом огне с изысканным ассортиментом мясных, рыбных и овощных блюд на гриле.
        </Text>
      </View>
    </>
  );
};
export default EventsCaliTwo;
