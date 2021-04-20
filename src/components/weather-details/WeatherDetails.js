import React from 'react';
import Formatter from 'utils/Formatter';
import {useConsumer} from '../../context/ConsumerProvider';

import {
  WeatherDetailsContainer,
  DetailsItem,
  DetaisItemIcon,
  DetailsItemValue,
} from './styles';

const Item = ({icon, value, unit}) => (
  <DetailsItem>
    <DetaisItemIcon name={icon} />
    <DetailsItemValue>{`${value} ${unit}`}</DetailsItemValue>
  </DetailsItem>
);

const WeatherDetails = () => {
  const {weather} = useConsumer();
  return (
    <WeatherDetailsContainer>
      <Item icon="cloudy" value={weather.current.humidity} unit="%" />
      <Item
        icon="compass"
        value={Formatter.hPaTomBar(weather.current.pressure)}
        unit="mBar"
      />
      <Item icon="wind" value={weather.current.wind_speed} unit="km/h" />
    </WeatherDetailsContainer>
  );
};

export {WeatherDetails};
