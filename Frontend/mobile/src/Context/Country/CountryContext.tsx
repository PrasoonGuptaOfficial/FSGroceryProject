import {createContext} from 'react';
import FlagsImages from '../../Constants/Images/Flags/FlagsImages';

const CountryContext = createContext({
  defaultCountry: {
    id: 34,
    countryName: 'India',
    countryKey: 'India',
    countryImage: FlagsImages.India,
    countryCode: 91,
  },
  onCountryChangeHandler: (selectedCountry: object) => {
    return selectedCountry;
  },
});

export default CountryContext;
