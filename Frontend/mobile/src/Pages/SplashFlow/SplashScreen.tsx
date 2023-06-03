import React, {useEffect} from 'react';
import {
  PNGImageComp,
  ViewComp,
} from '../../Components/Common/commonComps.index';
import {SplashPageStyle} from '../../Styles/Common/Common';
import ReusableCompString from '../../Constants/Strings/ReusableComp/ReusableCompString';
import PNGImages from '../../Constants/Images/PNG/PNGImages';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = (): React.JSX.Element => {
  const navigation = useNavigation();
  const {container, imageContainer} = SplashPageStyle();
  const {SplashGrocery} = PNGImages;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardingStack');
    }, 1000);
  }, [navigation]);
  return (
    <ViewComp viewType={ReusableCompString.SafeArea} viewStyle={container}>
      <PNGImageComp PngImage={SplashGrocery} PngImageStyle={imageContainer} />
    </ViewComp>
  );
};

export default SplashScreen;
