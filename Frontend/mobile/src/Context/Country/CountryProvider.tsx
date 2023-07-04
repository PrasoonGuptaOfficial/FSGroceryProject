import React, {useMemo, useState} from 'react';
import CountryContext from './CountryContext';
import FlagsImages from '../../Constants/Images/Flags/FlagsImages';

const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  const [defaultCountry, setDefaultCountry] = useState({
    id: 34,
    countryName: 'India',
    countryKey: 'India',
    countryImage: FlagsImages.India,
    countryCode: 91,
  });
  const onCountryChangeHandler = (selectedCountry: any): object => {
    setDefaultCountry(selectedCountry);
    return selectedCountry;
  };
  const countryProviderValue = useMemo(
    () => ({
      defaultCountry,
      onCountryChangeHandler,
    }),
    [defaultCountry],
  );
  return (
    <CountryContext.Provider value={countryProviderValue}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
