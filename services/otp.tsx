const AUTH_API = 'https://auth-service-ffptpmrzya-el.a.run.app';
import { notifyMessage } from '../constants/NotifyMessage';

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
    if (err instanceof Error) {
      notifyMessage(err.message);
    }
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

    if (!response.ok) {
      throw new Error(jsonResponse.message);
    }
    return jsonResponse;
  } catch (err) {
    notifyMessage('Wrong OTP');
    throw err;
  }
};
