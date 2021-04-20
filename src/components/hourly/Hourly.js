import React, {useMemo} from 'react';

import Formatter from 'utils/Formatter';
import {WeatherSmallIcon} from 'components/weather-icon-small/WeatherIconSmall';
import {
  HourlyList,
  HourlyItem,
  HourlyTemperature,
  Hour,
  HourlyTitle,
} from './styles';
import {useConsumer} from '../../context/ConsumerProvider';

const HourlyItemList = ({item}) => (
  <HourlyItem key={item.dt}>
    <Hour>{Formatter.unixToHourAmPm(item.dt)}</Hour>
    <WeatherSmallIcon icon={item.weather[0].icon} />
    <HourlyTemperature>{Formatter.celsius(item.temp)}</HourlyTemperature>
  </HourlyItem>
);

const Hourly = () => {
  const {weather} = useConsumer();

  const hourly = useMemo(() => {
    const items = [...weather.hourly];
    items.splice(0, 1);
    items.splice(10);
    return items;
  }, [weather]);

  return (
    <>
      <HourlyTitle>Hoje</HourlyTitle>
      <HourlyList
        data={hourly}
        renderItem={({item}) => <HourlyItemList item={item} />}
      />
    </>
  );
};

export {Hourly};
