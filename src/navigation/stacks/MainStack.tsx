import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Screens from '../consts/screens.ts';
import MainTintScreen from '../../screens/MainTintScreen.tsx';
import MenuCaliScreen from '../../screens/menu/MenuCaliScreen.tsx';
import KarzinaScreen from '../../screens/karzina/KarzinaScreen.tsx';
import KarzinaSuccessScreen from '../../screens/karzina/KarzinaSuccessScreen.tsx';
import ReserveCaliScreen from '../../screens/reserve/ReserveCaliScreen.tsx';
import ReserveSuccessCaliScreen from '../../screens/reserve/ReserveSuccessCaliScreen.tsx';
import ContactCaliScreen from '../../screens/contacts/ContactCaliScreen.tsx';
import BroadcastCaliScreen from '../../screens/broadcast/BroadcastCaliScreen.tsx';
import EventsMainCaliScreen from '../../screens/events/EventsMainCaliScreen.tsx';
import EventsDetailCaliScreen from '../../screens/events/EventsDetailCaliScreen.tsx';

const Stack = createStackNavigator();

const MainStack = (): React.JSX.Element => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.MAIN_APP} component={MainTintScreen} />
        <Stack.Screen name={Screens.MENU} component={MenuCaliScreen} />
        <Stack.Screen name={Screens.BASKET} component={KarzinaScreen} />
        <Stack.Screen name={Screens.BASKET_SUCCESS} component={KarzinaSuccessScreen} />
        <Stack.Screen name={Screens.RESERVE} component={ReserveCaliScreen} />
        <Stack.Screen name={Screens.RESERVE_SUCCESS} component={ReserveSuccessCaliScreen} />
        <Stack.Screen name={Screens.CONTACTS} component={ContactCaliScreen} />
        <Stack.Screen name={Screens.BROADCAST} component={BroadcastCaliScreen} />
        <Stack.Screen name={Screens.EVENTS} component={EventsMainCaliScreen} />
        <Stack.Screen name={Screens.EVENTS_DETAIL} component={EventsDetailCaliScreen} />
    </Stack.Navigator>
);
export default MainStack;
