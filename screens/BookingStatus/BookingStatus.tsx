import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { View, Text } from '../../components/Themed';
import { Display } from '../../constants';
import NewBooking from './NewBooking';
import ActiveBooking from './ActiveBooking';

export default function BookingStatus({ navigation }: any) {
  const [getSelectionMode, setSelectionMode] = useState(1);

  const updateSwitchData = (value: any) => {
    setSelectionMode(value);
  };

  return (
    <View>
      <Text style={styles.title}>
        {' '}
        SMART<Text style={styles.service}> SERVICES</Text>
      </Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(0, 0, 0, 0.22)'
      />
      <View style={styles.toggler}>
        <View style={styles.toggler1}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Octicons name='three-bars' size={34} color='black' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='notifications-outline' size={34} color='black' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonSelection}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => updateSwitchData(1)}
          style={[
            { backgroundColor: getSelectionMode == 1 ? '#AD40AF' : '#e4e4e4' },
            styles.newStyle,
          ]}
        >
          <Text
            style={{
              color: getSelectionMode === 1 ? 'white' : '#AD40AF',
              fontSize: 20,
            }}
          >
            New Booking
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => updateSwitchData(2)}
          style={[
            {
              backgroundColor: getSelectionMode === 2 ? '#AD40AF' : '#e4e4e4',
            },
            styles.bookingStyle,
          ]}
        >
          <Text
            style={{
              color: getSelectionMode === 2 ? 'white' : '#AD40AF',
              fontSize: 20,
            }}
          >
            Active Booking
          </Text>
        </TouchableOpacity>
      </View>
      {getSelectionMode === 1 ? <NewBooking /> : <ActiveBooking />}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#234c7d',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  service: {
    color: '#234c7d',
    fontWeight: 'normal',
  },
  separator: {
    height: 1.5,
    width: '80%',
    alignSelf: 'center',
  },
  toggler: {
    height: Display.setHeight(6),
    width: Display.setWidth(92),
    marginLeft: Display.setHeight(2),
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 7,
    backgroundColor: '#52C8F9',
  },
  toggler1: {
    display: 'flex',
    marginLeft: 10,
    marginRight: 6,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSelection: {
    height: Display.setHeight(6),
    width: Display.setWidth(92),
    marginLeft: Display.setHeight(2),
    marginTop: 7,
    backgroundColor: '#e4e4e4',
    borderRadius: 10,
    borderColor: '#AD40AF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  newStyle: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingStyle: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
