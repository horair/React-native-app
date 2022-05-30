import {StyleSheet} from 'react-native';

import colors from '../../helper/colors';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
  arrowBack: {
    position: 'absolute',
    width: 25,
    height: 20,
    top: 41,
    left: 37,
  },
  logo: {
    position: 'absolute',
    top: 85,
    left: 165,
    width: 84,
    height: 64,
  },
  logo2: {
    width: 220,
    height: 167,
    top: 89,
    left: 97,
  },
  pageHeader: {
    position: 'absolute',
    width: 160,
    height: 80,
    left: 47,
    top: 301,
  },
  pageHeadertxt: {
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Source Sans Pro',
    lineHeight: 40,
    color: colors.blueColor,
  },
  subhead1: {
    position: 'absolute',
    width: 95,
    height: 20,
    left: 47,
    top: 408,
  },
  subheadtxt: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Source Sans Pro',
    lineHeight: 20,
    color: colors.greyColor,
  },
  subhead2: {
    position: 'absolute',
    width: 320,
    height: 40,
    left: 47,
    top: 429,
  },
  inputicon: {
    right: '20%',
    top: '5%',
    bottom: '50%',
  },
  inputtxt: {
    left: 6,
    fontFamily: 'Source Sans Pro',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20.11,
  },
  input2: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    height: 47,
    top: 543,
    left: 47,
    right: 2,
    borderStyle: 'solid',
    borderWidth: 2,
    borderBottomColor: colors.greyColor,
  },
  btn2: {
    position: 'absolute',
    width: 77,
    height: 30,
    left: 168,
    top: 622,
    backgroundColor: colors.blueColor,
    borderRadius: 7,
  },
  btn2text: {
    paddingLeft: 14,
    paddingTop: 4,
    color: colors.whiteColor,
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;
