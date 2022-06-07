import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from './styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import colors from '../../helper/colors';
import Logo2 from '../../images/neurocare-2.png';
const MainLandingScreen = props => {
  return (
    <View style={styles.header}>
      <Ionicon
        name="chevron-back"
        style={styles.icon}
        size={20}
        color={colors.whiteColor}
      />
      <View style={styles.imageContainer}>
        <Image Source={Logo2} />
      </View>
    </View>
  );
};

export default MainLandingScreen;
