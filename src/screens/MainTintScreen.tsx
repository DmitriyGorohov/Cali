import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../styles/Colors.ts';
import { IconComponent } from '../components/icon/IconComponent.tsx';
import { caliList } from '../utils/common.ts';
import Screens from '../navigation/consts/screens.ts';
import Navigation from '../navigation/navigation.ts';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainTintScreen = (): React.JSX.Element => {
  const handleNavigate = (screen: Screens) => {
    Navigation.navigate(screen);
  };
  return (
    <SafeAreaView style={{ backgroundColor: Colors.black, flex: 1, alignItems: 'center' }}>
      <IconComponent style={{ width: 200, height: 150 }} icon="logoCali" />
      <View style={{ paddingHorizontal: 56, marginBottom: 34, paddingTop: 32, width: '100%' }}>
        {caliList.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => handleNavigate(item.screen)}
              key={item.id}
              activeOpacity={0.8}
              style={styles.item}
            >
              <Text
                style={{ color: Colors.white, fontSize: 18, fontWeight: '900' }}
              >
                {item.value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => handleNavigate(Screens.BASKET)}
        activeOpacity={0.8}
        style={{ alignSelf: 'center' }}
      >
        <IconComponent style={{ width: 50, height: 50 }} icon="cartMain" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: 250,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginBottom: 24,
    borderWidth: 3,
    borderRadius: 30,
    borderColor: Colors.yellowButton,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
});
export default MainTintScreen;
