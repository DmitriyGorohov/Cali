import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../styles/Colors.ts';
import Header from '../../components/Header.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconComponent } from '../../components/icon/IconComponent.tsx';
import { caliEventList } from '../../utils/common.ts';
import Screens from '../../navigation/consts/screens.ts';
import Navigation from '../../navigation/navigation.ts';
import { IconTypes } from '../../components/icon/icons';

const EventsMainCaliScreen = (): React.JSX.Element => {
  const handleSwitchIconName = (id: number): IconTypes => {
    switch (id) {
      case 1:
        return 'eventsTint1';
      case 2:
        return 'eventsTint2';
      case 3:
        return 'eventsTint3';
      case 4:
        return 'eventsTint4';
      case 5:
        return 'eventsTint5';
      case 6:
        return 'eventsTint5';
      default:
        return 'eventsTint1';
    }
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header />
      <View style={{ alignSelf: 'center', position: 'absolute', top: 50, }}>
        <IconComponent
          style={{ width: 200, height: 200, zIndex: 4 }}
          icon="logoCali"
        />
      </View>
      <View
        style={{
          paddingTop: 100,
          paddingHorizontal: 40,
          flex: 1,
          backgroundColor: Colors.black,
        }}
      >
        {caliEventList.map((item) => (
          <>
            <Text style={{ fontSize: 14, color: Colors.white, alignSelf: 'flex-end', paddingRight: 14, marginBottom: 10, }}>{item.time}</Text>
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                Navigation.navigate(Screens.EVENTS_DETAIL, {
                  iconName: handleSwitchIconName(item.id),
                })
              }
              activeOpacity={0.8}
              style={styles.item}
            >
              <Text
                style={{ color: Colors.white, fontSize: 20, fontWeight: '800' }}
              >
                {item.value}
              </Text>
            </TouchableOpacity>
          </>
        ))}
        <TouchableOpacity
          onPress={() => Navigation.navigate(Screens.BASKET)}
          activeOpacity={0.8}
          style={{ alignSelf: 'center' }}
        >
          <IconComponent style={{ width: 50, height: 50 }} icon="cartMain" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  containerE: {
    zIndex: 999,
    backgroundColor: Colors.white,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginBottom: 14,
    borderWidth: 1,
    borderColor: Colors.yellowButton,
    borderRadius: 30,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
export default EventsMainCaliScreen;
