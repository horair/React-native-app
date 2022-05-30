import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Navigationstrings from './Navigationstrings';

import {default as LogIn} from '../src/Screens/LogIn/index';
import {default as SignUp} from '../src/Screens/SignUp/index';
import {default as ForgotPassword} from '../src/Screens/ForgotPassword/index';
import {default as ResetPassword} from '../src/Screens/ResetPassword/index';
import {default as Dashboard} from '../src/Screens/Dashboard/index';

const AuthStack = createNativeStackNavigator();
function Navigator(props) {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName={Navigationstrings.Signup}
        screenOptions={{headerShown: false}}>
        <AuthStack.Screen name={Navigationstrings.Signup} component={SignUp} />
        <AuthStack.Screen name={Navigationstrings.Login} component={LogIn} />
        <AuthStack.Screen
          name={Navigationstrings.Forgotpassword}
          component={ForgotPassword}
        />
        <AuthStack.Screen
          name={Navigationstrings.Resetpassword}
          component={ResetPassword}
        />
        <AuthStack.Screen
          name={Navigationstrings.LandingPage}
          component={Dashboard}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
