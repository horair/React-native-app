import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';

const LandingScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <Text>This is the dashboard page.</Text>
      <Button title="click me" />
    </View>
  );
};

export default LandingScreen;
