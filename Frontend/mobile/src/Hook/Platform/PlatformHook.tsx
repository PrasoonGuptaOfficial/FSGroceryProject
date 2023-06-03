import {Platform} from 'react-native';

const PlatformHook = () => {
  let isIOS, isAndroid, androidVersion, iosVersion;
  if (Platform.OS === 'android') {
    isAndroid = true;
    androidVersion = Platform.Version.toString();
  } else if (Platform.OS === 'ios') {
    isIOS = true;
    iosVersion = Platform.Version;
  }
  return {isAndroid, isIOS, androidVersion, iosVersion};
};

export default PlatformHook;
