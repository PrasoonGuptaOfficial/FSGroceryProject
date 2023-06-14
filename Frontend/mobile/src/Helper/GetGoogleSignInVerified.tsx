import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  GOOGLE_API_SCOPE,
  GOOGLE_WEB_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
} from '@env';

export const GetGoogleSignInVerified = async () => {
  GoogleSignin.configure({
    scopes: [GOOGLE_API_SCOPE],
    webClientId: GOOGLE_WEB_CLIENT_ID,
    iosClientId: GOOGLE_IOS_CLIENT_ID,
    offlineAccess: true,
  });
  try {
    await GoogleSignin.hasPlayServices();
    const googleUserDetails = await GoogleSignin.signIn();
    return {
      userDetails: googleUserDetails,
      errorFlag: false,
      errorSignInFlag: false,
      errorInProgressFlag: false,
      errorPlayServicesFlag: false,
    };
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      return {
        userDetails: error,
        errorSignInFlag: true,
      };
    } else if (error.code === statusCodes.IN_PROGRESS) {
      return {
        userDetails: error,
        errorInProgressFlag: true,
      };
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      return {
        userDetails: error,
        errorPlayServicesFlag: true,
      };
    } else {
      return {
        userDetails: error,
        errorFlag: true,
      };
    }
  }
};
