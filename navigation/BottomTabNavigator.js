import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HiraganaScreen from '../screens/HiraganaScreen';
import KatakanaScreen from '../screens/KatakanaScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Hiragana'; // The actual route, not just an abritrary string.

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Hiragana"
        component={HiraganaScreen}
        options={{
          title: '平仮名 (ひらがな)',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Katakana"
        component={KatakanaScreen}
        options={{
          title: '片仮名 (カタカナ)',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Hiragana':
      return 'Hiragana Chart';
    case 'Katakana':
      return 'Katakana Chart';
  }
}
