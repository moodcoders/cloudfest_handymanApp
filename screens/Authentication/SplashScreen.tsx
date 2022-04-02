import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Smartservice from '../../assets/images/smartservice.png';
import Handyman from '../../assets/images/handyman.png';

import { Display } from '../../constants';
import Colors from '../../constants/Colors';

import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import NumberVerification from '../../components/NumberVerification';

const SplashScreen = ({ navigation }: any) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor='#009387' barStyle='light-content' /> */}
      <View style={styles.header}>
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
      </View>
      <Animatable.View animation='fadeInUpBig' style={styles.footer}>
        {/* <Text style={styles.title}> Stay Connected With Every Customer</Text>
        <Text style={styles.text}>Sign in With account</Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => navigation.navigate('NumberVerification')}
          >
            <Text style={styles.textSign}>Get Started</Text>
            <MaterialIcons name='navigate-next' color='#fff' size={25} />
          </TouchableOpacity>
        </View> */}
        <NumberVerification />
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

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
    paddingVertical: 50,
    paddingHorizontal: 30,
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
  // title: {
  //   color: '#05375a',
  //   fontSize: 30,
  //   fontWeight: 'bold',
  // },
  // text: {
  //   color: 'grey',
  //   marginTop: 5,
  //   fontSize: 18,
  // },
  // button: {
  //   alignItems: 'flex-end',
  //   marginTop: '12%',
  // },
  // signIn: {
  //   width: Display.setWidth(48),
  //   height: Display.setHeight(8),
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 50,
  //   flexDirection: 'row',
  //   backgroundColor: Colors.Button_Blue,
  // },
  // textSign: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   fontSize: 18,
  // },
});
