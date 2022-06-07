import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Navigationstrings from './Navigationstrings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {default as LandingScreen} from '../src/Screens/LandingScreen/index';
import {default as Search} from '../src/Screens/Search/index';
import {default as Phone} from '../src/Screens/Phone/index';
import {default as Discussion} from '../src/Screens/Discussion/index';
import {default as SettingScreen} from '../src/Screens/SettingScreen/index';

const Tab = createBottomTabNavigator();

function TabNavigator(props) {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen
        name={Navigationstrings.LandingPage}
        component={LandingScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Navigationstrings.Search}
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Navigationstrings.Phone}
        component={Phone}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="phone" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Navigationstrings.Discussion}
        component={Discussion}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicon name="chatbubbles-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Navigationstrings.Settings}
        component={SettingScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
