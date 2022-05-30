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

const ForgotPassword = props => {
  const navigateToLogIn = () => {
    props.navigation.navigate(Navigationstrings.Login);
  };
  const navigateToResetPassword = () => {
    props.navigation.navigate(Navigationstrings.Resetpassword);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TouchableOpacity
          onPress={() => {
            navigateToLogIn();
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
          <Text style={styles.pageHeadertxt}>{StaticText.Forgot_password}</Text>
        </View>
        <View style={styles.subhead1}>
          <Text style={styles.subheadtxt}>{StaticText.Dont_worry}</Text>
        </View>
        <View style={styles.subhead2}>
          <Text style={styles.subheadtxt}>{StaticText.Please_enter_email}</Text>
        </View>
        <View style={styles.input2}>
          <TextInput
            style={styles.inputtxt}
            placeholder={StaticText.E_Mail}
            placeholderTextColor="#5E5E5E"
          />
          <Ionicon name="mail" color="#5E5E5E" style={styles.inputicon} />
        </View>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            navigateToResetPassword();
          }}>
          <Text style={styles.btn2text}>{StaticText.Submit}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;
