import React from 'react';

const SVGImageComp = (props: any): React.JSX.Element => {
  const {SvgImage, SvgImageWidth, SvgImageHeight} = props;
  return <SvgImage width={SvgImageWidth} height={SvgImageHeight} />;
};

export default SVGImageComp;
