import React, {useMemo} from 'react';
import {
  PNGImageComp,
  ViewComp,
} from '../../Components/Common/commonComps.index';
import {SplashPageStyle} from '../../Styles/Common/Common';
import ReusableCompString from '../../Constants/Strings/ReusableComp/ReusableCompString';
import PNGImages from '../../Constants/Images/PNG/PNGImages';

const SplashScreen = (): React.JSX.Element => {
  const {container, imageContainer} = useMemo(() => SplashPageStyle(), []);
  const {SplashGrocery} = PNGImages;
  return (
    <ViewComp viewType={ReusableCompString.SafeArea} viewStyle={container}>
      <PNGImageComp PngImage={SplashGrocery} PngImageStyle={imageContainer} />
    </ViewComp>
  );
};

export default SplashScreen;
