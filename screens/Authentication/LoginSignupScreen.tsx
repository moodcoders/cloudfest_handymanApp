import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Keyboard, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import NumberVerification from '../../components/NumberVerification';
import Colors from '../../constants/Colors';
import { Display } from '../../constants';
import { Text, View } from '../../components/Themed';
import Smartservice from '../../assets/images/smartservice.png';
import Handyman from '../../assets/images/handyman.png';

/**
 *LoginSignupScreen is the authentication page of the App
 *
 * @param navigation - object that contains react-navigation methods
 *
 * @returns JSX Elements
 */
const LoginSignupScreen = ({ navigation }: any) => {
  const [didKeyboardShow, setKeyboardShow] = useState<any>(true);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    //  cleaningup the keyboard event with remove listeners
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboardShow(false);
  };

  const _keyboardDidHide = () => {
    setKeyboardShow(true);
  };

  return (
    <View style={styles.container}>
      {didKeyboardShow ? (
        <KeyboardAvoidingView style={styles.header} behavior='padding'>
          <Animatable.Image
            animation='bounceIn'
            duration={1500}
            source={Smartservice}
            style={styles.logo1}
            resizeMode='stretch'
          />
          <Animatable.View
            animation='flipInX'
            duration={1500}
            style={styles.textFlex}
          >
            <Text style={styles.primaryText}>Join Us and Make the</Text>
            <Text style={[styles.primaryText, styles.secondaryText]}>
              Communtiy Smarter
            </Text>
          </Animatable.View>
          <Animatable.Image
            animation='bounceIn'
            duration={1500}
            source={Handyman}
            style={styles.logo2}
            resizeMode='stretch'
          />
        </KeyboardAvoidingView>
      ) : (
        <View style={styles2.header}>
          <Animatable.Image
            animation='slideInUp'
            duration={500}
            source={Smartservice}
            style={styles2.logo1}
            resizeMode='stretch'
          />
          <Animatable.View
            animation='slideInUp'
            duration={500}
            style={styles2.textFlex}
          >
            <Text style={styles2.primaryText}>Join Us and Make the</Text>
            <Text style={[styles2.primaryText, styles2.secondaryText]}>
              Communtiy Smarter
            </Text>
          </Animatable.View>
          <Animatable.Image
            animation='slideInUp'
            duration={500}
            source={Handyman}
            style={styles2.logo2}
            resizeMode='stretch'
          />
        </View>
      )}
      <Animatable.View animation='fadeInUpBig' style={styles.footer}>
        <NumberVerification navigation={navigation} />
      </Animatable.View>
    </View>
  );
};

export default LoginSignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GREY2,
  },
  header: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footer: {
    flex: 1.5,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: '10%',
    paddingHorizontal: '8%',
  },
  logo1: {
    marginTop: '10%',
    height: Display.setHeight(18),
    width: Display.setWidth(60),
  },
  textFlex: {
    display: 'flex',
    alignItems: 'center',
  },
  primaryText: {
    color: 'black',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  secondaryText: {
    fontWeight: 'bold',
    color: 'black',
  },
  logo2: {
    height: Display.setHeight(20),
    width: Display.setWidth(35),
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GREY2,
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logo1: {
    marginTop: '5%',
    marginBottom: '5%',
    height: Display.setHeight(13),
    width: Display.setWidth(40),
  },
  textFlex: {
    display: 'flex',
    alignItems: 'center',
  },
  primaryText: {
    color: 'black',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  secondaryText: {
    fontWeight: 'bold',
    color: 'black',
  },
  logo2: {
    marginTop: '5%',
    height: Display.setHeight(12),
    width: Display.setWidth(20),
  },
});
