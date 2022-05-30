import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Navigationstrings from '../../../Navigation/Navigationstrings';
import styles from './styles';
import Logo from '../../images/neurocare1.png';
import Logo2 from '../../images/neurocare-2.png';
import Logo3 from '../../images/Vector.png';
import StaticText from '../../constant/StaticText';

const SignUp = props => {
  const navigateToLogin = () => {
    props.navigation.navigate(Navigationstrings.Login);
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, height: '120%'}}>
      <View style={styles.mainContainer}>
        <Image style={styles.logo} source={Logo} />
        <Image style={styles.logo2} source={Logo2} />
        <TouchableOpacity style={styles.btnsignUp}>
          <Text style={styles.signUptext}>{StaticText.Sign_up}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            navigateToLogin();
          }}>
          <Text style={styles.Logintext}>{StaticText.Sign_in}</Text>
        </TouchableOpacity>
        <View style={styles.input1}>
          <TextInput
            style={styles.input1txt}
            placeholder={StaticText.Name}
            placeholderTextColor="#5E5E5E"
          />
          <Ionicon name="person" color="#5E5E5E" style={styles.icon1} />
        </View>
        <View style={styles.input2}>
          <TextInput
            style={styles.input1txt}
            placeholder={StaticText.E_Mail}
            placeholderTextColor="#5E5E5E"
          />
          <Ionicon name="mail" color="#5E5E5E" style={styles.icon1} />
        </View>
        <View style={styles.input3}>
          <TextInput
            style={styles.input1txt}
            placeholder={StaticText.Password}
            placeholderTextColor="#5E5E5E"
          />
          <Ionicon name="key" color="#5E5E5E" style={styles.icon1} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigateToLogin();
          }}
          style={styles.btn2}>
          <Text style={styles.btn2text}>{StaticText.Sign_up2}</Text>
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
        <View style={styles.LogintxtContainer}>
          <Text style={styles.Logintxt}>{StaticText.Join_us}</Text>
          <TouchableOpacity
            onPress={() => {
              navigateToLogin();
            }}>
            <Text
              style={{
                color: '#486FD4',
                fontSize: 16,
                fontWeight: '600',
                lineHeight: 20.11,
                marginLeft: 3,
              }}>
              {StaticText.Login}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lastContainer}>
          <Text style={styles.lastContainerTxt}>{StaticText.Description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
