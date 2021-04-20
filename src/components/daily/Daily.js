import {WeatherSmallIcon} from 'components/weather-icon-small/WeatherIconSmall';
import React from 'react';
import Formatter from 'utils/Formatter';
import {useConsumer} from '../../context/ConsumerProvider';

import {DailyList, DailyItem, DailyDay, DailyMax, DailyMin} from './styles';

const DailyItemList = ({item}) => (
  <DailyItem key={item.dt}>
    <DailyDay>{Formatter.unixToDayOfWeek(item.dt)}</DailyDay>
    <WeatherSmallIcon icon={item.weather[0].icon} />
    <DailyMax>{Formatter.celsius(item.temp.max)}</DailyMax>
    <DailyMin>{Formatter.celsius(item.temp.min)}</DailyMin>
  </DailyItem>
);

const Daily = () => {
  const {weather} = useConsumer();
  const {daily} = weather;
  daily.splice(7);

  return (
    <DailyList
      data={daily}
      renderItem={({item}) => <DailyItemList item={item} />}
    />
  );
};

export {Daily};
