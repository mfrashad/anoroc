import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoronaTestScreen from '../screens/CoronaTestScreen';
import CoronaQuestionScreen from '../screens/CoronaQuestionScreen';
import HomeScreen from '../screens/HomeScreen';
import CoronaResultScreen from '../screens/CoronaResultScreen';
import NearestHospitalScreen from '../screens/NearestHospitalScreen';
import Colors from '../constants/Colors';

const MainStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function MainStackNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <MainStack.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primaryColor},
        headerTitleStyle: {color: 'white'},
        headerTintColor: 'white',
      }}
    >
      <MainStack.Screen 
        name="Home"
        component={HomeScreen} />
      <MainStack.Screen
        headerShown={true}
        screenOptions={{headerShown: true}}
        name="CoronaResult"
        component={CoronaResultScreen} />
      <MainStack.Screen
        name="CoronaStart"
        component={CoronaTestScreen}
        options={{
          title: 'Corona Assessment',
        }}
      />
      <MainStack.Screen
        name="CoronaQuestion"
        component={CoronaQuestionScreen}
        options={{
          title: 'Corona Assessment',
        }}
      />
      <MainStack.Screen
        name="NearestHospital"
        component={NearestHospitalScreen}
        options={{
          title: 'NearestHospital',
        }}
      />
    </MainStack.Navigator>
  );
}