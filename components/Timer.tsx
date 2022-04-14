import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from '../components/Themed';
import Colors from '../constants/Colors';
import { Display } from '../constants';
import { generateOtpAPI } from '../services/otp';

interface timerProp {
  mobileNumber: string;
}
/**
 * Timer Component is used for displaying the timer
 *
 * @param mobileNumber
 *
 * @returns JSX Elements
 */
const Timer = ({ mobileNumber }: timerProp) => {
  const [seconds, setSeconds] = useState(360);

  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  const resendOtp = () => {
    setSeconds(300);
    generateOtpAPI(mobileNumber);
    console.log('Resending');
  };

  return (
    <View>
      {seconds === 0 ? (
        <Text style={styles.resendtext} onPress={resendOtp}>
          Resend
        </Text>
      ) : (
        <Text style={styles.resendtimer}>
          Please Wait:{'  '}
          {`0${Math.floor(seconds / 60)}`}:
          {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
        </Text>
      )}
    </View>
  );
};
export default Timer;

const styles = StyleSheet.create({
  resendtimer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    fontSize: 18,
    color: '#377BA1',
  },
  resendtext: {
    fontSize: 18,
    color: Colors.DEFAULT_GREEN,
    marginLeft: Display.setWidth(2),
  },
});
