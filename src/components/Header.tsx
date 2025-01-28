import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconComponent } from './icon/IconComponent.tsx';
import Navigation from '../navigation/navigation.ts';
import Screens from '../navigation/consts/screens.ts';
import Colors from '../styles/Colors.ts';

interface HeaderProps {
  isCenter?: boolean;
}

const Header = ({ isCenter = true }: HeaderProps): React.JSX.Element => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => Navigation.pop()} activeOpacity={0.8}>
      <IconComponent style={{ width: 30, height: 30 }} icon={'menuCali'} />
    </TouchableOpacity>
    {!isCenter && <IconComponent style={{ width: 50, height: 50 }} icon={'logoHeader'} />}
    <TouchableOpacity
      onPress={() => Navigation.navigate(Screens.BASKET)}
      activeOpacity={0.8}
    >
      <IconComponent style={{ width: 30, height: 30 }} icon={'caliCartHeader'} />
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.black,
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 10,
    marginBottom: 32,
  },
});
export default Header;
