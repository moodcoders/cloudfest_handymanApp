import { ToastAndroid, Platform, Alert } from 'react-native';

export function notifyMessage(msg: string | any) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert(msg);
  }
}