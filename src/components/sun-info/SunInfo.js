import React from 'react';
import Formatter from 'utils/Formatter';
import {useConsumer} from '../../context/ConsumerProvider';
import {
  Container,
  Right,
  Left,
  Hour,
  SunriseIcon,
  SunsetIcon,
  DecorationLine,
} from './styles';

const SunInfo = () => {
  const {weather} = useConsumer();

  return (
    <Container>
      <Left>
        <SunriseIcon />
        <Hour>{Formatter.unixToHour(weather.current.sunrise)}</Hour>
      </Left>
      <Right>
        <Hour>{Formatter.unixToHour(weather.current.sunset)}</Hour>
        <SunsetIcon />
      </Right>
      <DecorationLine />
    </Container>
  );
};

export {SunInfo};
