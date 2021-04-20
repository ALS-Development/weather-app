import Reload from 'components/reload';
import React from 'react';
import Formatter from 'utils/Formatter';
import {useConsumer} from '../../context/ConsumerProvider';

import {
  CurrentContainer,
  WeatherDescription,
  City,
  CurrentTemperature,
  WeatherDescriptionContainer,
} from './styles';

const Current = ({reload}) => {
  const {weather} = useConsumer();
  return (
    <CurrentContainer icon={weather.current.weather[0].icon}>
      <City>{weather.locationName}</City>
      <CurrentTemperature>
        {Formatter.celsius(weather.current.temp)}
      </CurrentTemperature>
      <WeatherDescriptionContainer>
        <WeatherDescription>
          {weather.current.weather[0].description}
        </WeatherDescription>
      </WeatherDescriptionContainer>
      <Reload onPress={reload} />
    </CurrentContainer>
  );
};

export {Current};
