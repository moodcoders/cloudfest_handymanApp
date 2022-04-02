import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Text, View } from './Themed';
import Colors from '../constants/Colors';
import { Display } from '../constants';
// import { generateOtpAPI } from '../services/otp';
import IndianFlag from '../assets/images/india.png';
import { FontAwesome } from '@expo/vector-icons';

/**
 * NumberVerification Component is allowing the user to input the number for SignUp/Login
 *
 * @param navigation - object that contains react-navigation methods
 *
 * @returns JSX.Element
 */
const NumberVerification = ({ navigation }: any) => {
  const [mobileNumber, setmobileNumber] = useState('');
  const [isValidNumberFlag, setValidNumberFlag] = useState<Boolean>(false);

  /**validatemobileNumber is a function for checking(if the input value is number or not) */
  function validatemobileNumber(number: string): Boolean {
    const regexp = new RegExp('^[0-9]{0,10}$');
    return regexp.test(number);
  }

  /**onChangeHandler is checking(for any special character) in the number entered by the user */
  function onChangeHandler(text: string) {
    let res = validatemobileNumber(text);
    setValidNumberFlag(res);
    if (res === true) {
      setmobileNumber(text);
    }
  }

  /**onPressCheck is navigating the user to OtpVerification page by checking the
   * correct format and length of a number
   */
  function onPressCheck() {
    (
      isValidNumberFlag === true && mobileNumber.length === 10
        ? generateOtpAPI(mobileNumber)
        : null
    )
      ? navigation.navigate('OtpVerification', {
          mobileNumber,
        })
      : Alert.alert('Enter Your Correct Phone Number');
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.primaryText}>Login Or SignUp</Text>
        <View style={styles.inputsContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.countryListContainer}>
              <Image style={styles.image} source={IndianFlag} />
              <Text style={styles.countryCodeText}>{'+91'}</Text>
            </TouchableOpacity>
            <View style={styles.phoneInputContainer}>
              <TextInput
                maxLength={10}
                placeholder='Phone Number'
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                keyboardType='number-pad'
                style={styles.inputText}
                onChangeText={onChangeHandler}
                value={mobileNumber}
              />
            </View>
          </View>
          <Text style={styles.verificationText}>
            {mobileNumber.length !== 0
              ? isValidNumberFlag
                ? ''
                : 'Invalid'
              : null}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.signinButton, { alignSelf: 'center' }]}
        activeOpacity={0.8}
        onPress={onPressCheck}
      >
        <Text style={styles.signinButtonText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.borderContainer}>
        <View style={styles.border} />
        <Text style={styles.borderText}>Or</Text>
        <View style={styles.border} />
      </View>
      {/* <Text
        style={[styles.primaryText, styles.secondaryText, styles.borderDown]}
      >
        Sign Up With
      </Text> */}
      <TouchableOpacity style={[styles.borderContainer, styles.socialIcon]}>
        <FontAwesome name='google' size={40} color={Colors.GOOGLE_BLUE} />
      </TouchableOpacity>
    </View>
  );
};

export default NumberVerification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DEFAULT_WHITE,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  inputsContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: '5%',
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    width: Display.setWidth(22),
    marginRight: 5,
    borderRadius: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: Colors.LIGHT_GREY2,
    flexDirection: 'row',
  },
  image: {
    height: 35,
    width: 30,
    borderRadius: 50,
  },
  countryCodeText: {
    fontSize: 16,
    color: Colors.DEFAULT_BLACK,
  },
  phoneInputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 8,
    borderColor: Colors.LIGHT_GREY2,
    width: '70%',
    height: '100%',
  },
  inputText: {
    fontSize: 18,
    height: Display.setHeight(6),
    marginLeft: 10,

    color: Colors.DEFAULT_BLACK,
    letterSpacing: 1,
  },
  verificationText: {
    color: 'red',
    fontWeight: 'bold',
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    height: Display.setHeight(6),
    width: Display.setWidth(50),

    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },

  primaryText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryText: {
    color: 'black',
    marginTop: '10%',
  },
  thirdText: {
    color: 'blue',
    marginTop: '3%',
  },
  borderContainer: {
    marginTop: '9%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  border: {
    width: '46%',
    borderBottomWidth: 1,
  },
  borderText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  borderDown: {
    marginTop: '3.5%',
    fontSize: 15,
    fontWeight: 'bold',
  },
  socialIcon: {
    // letterSpacing: 200,
    justifyContent: 'space-around',
  },
});
