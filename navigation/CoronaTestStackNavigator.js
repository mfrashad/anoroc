import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoronaTestScreen from '../screens/CoronaTestScreen';
import Colors from '../constants/Colors';

const CoronaTestStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'CoronaStart';

export default function CoronaTestStackNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <CoronaTestStack.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primaryColor},
        headerTitleStyle: {color: 'white'}
      }}
    >
      <CoronaTestStack.Screen
        name="CoronaStart"
        component={CoronaTestScreen}
        options={{
          title: 'Corona Assessment',
        }}
      />
    </CoronaTestStack.Navigator>
  );
}
