import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Navigationstrings from '../../../Navigation/Navigationstrings';
import Logo from '../../images/neurocare1.png';
import Logo2 from '../../images/neurocare-2.png';

import styles from './styles';
import StaticText from '../../constant/StaticText';

const LogIn = props => {
  const navigateToSignUp = () => {
    props.navigation.navigate(Navigationstrings.Signup);
  };
  const navigateToMainScreen = () => {
    props.navigation.navigate(Navigationstrings.MainScreen);
  };
  const navigateToForgotPassword = () => {
    props.navigation.navigate(Navigationstrings.Forgotpassword);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={{flexGrow: 1, height: '130%'}}>
        <TouchableOpacity
          onPress={() => {
            navigateToSignUp();
          }}>
          <Ionicon
            name="arrow-back"
            size={25}
            color="#FFFFFF"
            style={styles.arrowBack}
          />
        </TouchableOpacity>
        <Image style={styles.logo} source={Logo} />
        <Image style={styles.logo2} source={Logo2} />

        <View style={styles.input2}>
          <TextInput
            style={styles.inputtxt}
            placeholder={StaticText.E_Mail}
            placeholderTextColor="#5E5E5E"
          />
          <Ionicon name="mail" color="#5E5E5E" style={styles.inputicon} />
        </View>
        <View style={styles.input3}>
          <TextInput
            style={styles.inputtxt}
            placeholder={StaticText.Password}
            placeholderTextColor="#5E5E5E"
          />
          <Ionicon name="key" color="#5E5E5E" style={styles.inputicon} />
        </View>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            navigateToMainScreen();
          }}>
          <Text style={styles.btn2text}>{StaticText.Login_2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fpass}
          onPress={() => {
            navigateToForgotPassword();
          }}>
          <Text style={styles.fpasstext}>{StaticText.Forgot_password}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fingerPrintContainer}>
          <Icon
            name="fingerprint"
            size={57}
            color="#486FD4"
            style={styles.fingerPrintIcon}
          />
        </TouchableOpacity>
        <View style={styles.txt2Container}>
          <Text style={styles.txt2}>{StaticText.Fingerprint}</Text>
        </View>
        <View style={styles.SignuptxtContainer}>
          <Text style={styles.Signuptxt}>{StaticText.New_to_Logistics}</Text>
          <TouchableOpacity
            onPress={() => {
              navigateToSignUp();
            }}>
            <Text
              style={{
                color: '#486FD4',
                fontSize: 16,
                fontWeight: '600',
                lineHeight: 20.11,
                marginLeft: 3,
              }}>
              {StaticText.Sign_up2}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lastContainer}>
          <Text style={styles.lastContainerTxt}>{StaticText.Description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default LogIn;
