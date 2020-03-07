import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LinksScreen from '../screens/LinksScreen';

const AuthStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <AuthStack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <AuthStack.Screen
        name="Home"
        component={LoginScreen}
        options={{
          title: 'Get Started',
          headerStyle:{display: 'none'},
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
    </AuthStack.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return '';
    case 'Links':
      return 'Links to learn more';
  }
}
