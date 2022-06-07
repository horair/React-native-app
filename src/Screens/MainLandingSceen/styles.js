import {StyleSheet} from 'react-native';
import colors from '../../helper/colors';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 58,
    backgroundColor: colors.blueColor,
  },
  icon: {
    width: 14,
    height: 17,
    marginVertical: 22,
    marginLeft: 17.99,
  },
  imageContainer: {
    marginTop: 20,
    marginLeft: 51,
    width: 116,
    height: 88,
  },
});

export default styles;
