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

const ResetPassword = props => {
  const navigateToDashboard = () => {
    props.navigation.navigate(Navigationstrings.LandingPage);
  };
  const navigateToForgotPassword = () => {
    props.navigation.navigate(Navigationstrings.Forgotpassword);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TouchableOpacity
          onPress={() => {
            navigateToForgotPassword();
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
        <View style={styles.pageHeader}>
          <Text style={styles.pageHeadertxt}>{StaticText.Reset_password}</Text>
        </View>
        <View style={styles.input1}>
          <TextInput
            style={styles.inputtxt}
            placeholder={StaticText.New_password}
            placeholderTextColor="#5E5E5E"
          />
          <Ionicon name="key" color="#5E5E5E" style={styles.inputicon} />
        </View>
        <View style={styles.input2}>
          <TextInput
            style={styles.inputtxt}
            placeholder={StaticText.Confirm_password}
            placeholderTextColor="#5E5E5E"
          />
          <Ionicon name="key" color="#5E5E5E" style={styles.inputicon} />
        </View>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            navigateToDashboard();
          }}>
          <Text style={styles.btn2text}>{StaticText.Submit}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ResetPassword;
