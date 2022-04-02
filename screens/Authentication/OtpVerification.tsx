import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Display } from '../../constants';
import Separator from '../../components/Separator';
// import Timer from '../../components/Timer';
// import { validateOtp } from '../../services/otp';

/**
 * OtpVerification Component is verifying the Otp send to the User
 *
 * @param navigation - object that contains react-navigation methods
 * @param mobileNumber as route.params
 *
 * @returns JSX.Element
 */
const OtpVerification = () => {
  // const { mobileNumber } = route.params;

  const checkValidation = () => {
    // validateOtp(mobileNumber, otp);
    // navigation.navigate('Root');
  };

  const [otp, setOtp] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name='chevron-back-outline'
          size={30}
          // onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>

      <Text style={styles.content}>
        Enter the OTP number just sent you at{' '}
        <Text style={styles.mobileNumberText}>mobileNumber</Text>
      </Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={[styles.otpBox, styles.otpText]}
          keyboardType='number-pad'
          maxLength={6}
          onChangeText={(text) => {
            setOtp(text);
          }}
          defaultValue={otp}
        />
      </View>
      <View style={styles.resendController}>
        {/* <Timer mobileNumber={mobileNumber} /> */}
      </View>
      <TouchableOpacity style={styles.signinButton} onPress={checkValidation}>
        <Text style={styles.signinButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  content: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: '40%',
    marginBottom: 30,
    marginHorizontal: 20,
  },
  mobileNumberText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_YELLOW,
  },
  otpContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    width: 320,
    paddingLeft: 15,
    letterSpacing: 32,
    borderBottomWidth: 2,
    borderRadius: 1,
    borderColor: Colors.DEFAULT_GREEN,
  },

  otpText: {
    fontSize: 25,
    color: Colors.DEFAULT_BLACK,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  resendController: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: '6%',
    paddingVertical: '5%',
  },
  signinButton: {
    backgroundColor: Colors.Button_Blue,
    borderRadius: 8,
    marginHorizontal: '10%',

    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8%',
  },
  signinButtonText: {
    fontSize: 20,
    color: Colors.DEFAULT_WHITE,
    letterSpacing: 0.6,
  },
});
