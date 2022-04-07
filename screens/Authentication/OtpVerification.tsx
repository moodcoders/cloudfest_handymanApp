import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Display } from '../../constants';
import Timer from '../../components/Timer';
import { AuthContext } from '../../constants/Context';
import { validateOtp } from '../../services/otp';
interface ctx {
  myState: Boolean;
  setMyState: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * OtpVerification Component is verifying the Otp send to the User
 *
 * @param navigation - object that contains react-navigation methods
 * @param mobileNumber as route.params
 *
 * @returns JSX.Element
 */
const OtpVerification = ({ navigation, route }: any) => {
  const { mobileNumber } = route.params;
  const { myState, setMyState } = useContext<ctx | any>(AuthContext);

  const checkValidation = () => {
    validateOtp(mobileNumber, otp);
    setMyState(!myState);
  };

  const [otp, setOtp] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Ionicons
            name='chevron-back-outline'
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>OTP Verification</Text>
        </View>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation='fadeInUpBig' style={styles.footer}>
        <Text style={styles.content}>
          Enter the OTP number just sent you at{' '}
          <Text style={styles.mobileNumberText}>{mobileNumber}</Text>
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
          <Timer mobileNumber={mobileNumber} />
        </View>
        <TouchableOpacity style={styles.signinButton} onPress={checkValidation}>
          <Text style={styles.signinButtonText}>Verify</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GREY2,
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  headerContainer: {
    marginTop: '8%',
    flexDirection: 'row',
    paddingVertical: 20,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: 25,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  content: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: '20%',
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
