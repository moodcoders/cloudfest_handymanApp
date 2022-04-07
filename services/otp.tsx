import { ToastAndroid, Platform, Alert } from 'react-native';

function notifyMessage(msg: string | any) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert(msg);
  }
}
const AUTH_API = 'http://192.168.1.11:4000';

/**generateOtpAPI is generating OTP for the handyman */
export const generateOtpAPI = async (mobileNumber: string) => {
  try {
    const response = await fetch(`${AUTH_API}/auth/handymanOtp/generate-otp`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobileNumber: mobileNumber,
      }),
    });
    const jsonResponse = await response.json();
    notifyMessage(JSON.stringify(jsonResponse.message));
  } catch (err) {
    notifyMessage(err);
  }
};

/**validateOtp is generating token for the handyman */
export const validateOtp = async (mobileNumber: string, otp: string) => {
  try {
    const response = await fetch(`${AUTH_API}/auth/handymanOtp/handymanlogin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: mobileNumber,
        password: otp,
      }),
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (err) {
    alert(err);
  }
};
