import auth from '@react-native-firebase/auth';

export const GetPhoneNumberOtp = async (phoneNumber: string) => {
  try {
    const response = await auth().signInWithPhoneNumber(phoneNumber, true);
    if (response) {
      return {
        phoneNumberOtpResponse: response,
        errorFlag: false,
      };
    }
  } catch (error) {
    if (error) {
      return {
        phoneNumberOtpResponse: error,
        errorFlag: true,
      };
    }
  }
};
