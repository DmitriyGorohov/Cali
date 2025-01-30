import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { IconComponent } from '../../components/icon/IconComponent.tsx';
import Colors from '../../styles/Colors.ts';
import Navigation from '../../navigation/navigation.ts';
import { useRoute } from '@react-navigation/native';
import { EventDetailsRouteProps } from '../../types/stacks/MainTintStacksType.ts';
import { IconTypes } from '../../components/icon/icons';
import React from 'react';
import EventsCaliOne from './components/EventsCaliOne.tsx';
import EventsCaliTwo from './components/EventsCaliTwo.tsx';
import EventsCaliTree from './components/EventsCaliTree.tsx';
import EventsCaliFour from './components/EventsCaliFour.tsx';
import EventsCaliFive from './components/EventsCaliFive.tsx';

const EventsDetailCaliScreen = (): React.JSX.Element => {
  const {
    params: { iconName },
  } = useRoute<EventDetailsRouteProps>();
  console.log(iconName);

  const renderView = (): React.JSX.Element => {
    switch (iconName) {
      case 'eventsTint1':
        return <EventsCaliOne />
      case 'eventsTint2':
        return <EventsCaliTwo />
      case 'eventsTint3':
        return <EventsCaliTree />
      case 'eventsTint4':
        return <EventsCaliFour />
      case 'eventsTint5':
        return <EventsCaliFive />
      default:
        return <View />;
    }
  };

  return (
    <View style={[styles.container, iconName === 'eventsTint4' || iconName === 'eventsTint5' ? { backgroundColor: Colors.transparent } : { backgroundColor: Colors.yellowButton }]}>
      <TouchableOpacity style={{ backgroundColor: iconName === 'eventsTint4' || iconName === 'eventsTint5' ? Colors.yellowButton : Colors.transparent }} onPress={() => Navigation.pop()} activeOpacity={1}>
        <IconComponent
          style={{ width: 20, height: 20, marginTop: 80, marginLeft: 20, marginBottom: 20, }}
          icon={'backTint'}
        />
      </TouchableOpacity>
      <IconComponent
        style={{
          width: Dimensions.get('window').width,
          height:
            Platform.OS === 'ios'
              ? Dimensions.get('window').height
              : Dimensions.get('window').height + 50,
        }}
        icon={iconName as IconTypes}
      />
      {renderView()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default EventsDetailCaliScreen;
