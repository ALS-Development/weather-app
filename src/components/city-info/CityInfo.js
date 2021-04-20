import {WeatherSmallIcon} from 'components/weather-icon-small/WeatherIconSmall';
import React from 'react';
import Formatter from 'utils/Formatter';
import {
  Container,
  ContentTempIcon,
  CityName,
  Country,
  Icon,
  Info,
  Temperature,
  ContentInfo,
  ItemInfo,
} from './styles';

const CityInfo = ({city}) => {
  const Information = ({icon, value, unit}) => (
    <ItemInfo>
      <Icon name={icon} />
      <Info>{`${value} ${unit}`}</Info>
    </ItemInfo>
  );
  return (
    <Container>
      <ContentTempIcon>
        <Temperature>{Formatter.celsius(city.main.temp)}</Temperature>
        <WeatherSmallIcon icon={city.weather[0].icon} size="60" />
      </ContentTempIcon>
      <CityName>{city.name}</CityName>
      <Country>{city.sys.country}</Country>
      <ContentInfo>
        <Information icon="cloudy" value={city.main.humidity} unit="%" />
        <Information icon="wind" value={city.wind.speed} unit="km/h" />
      </ContentInfo>
    </Container>
  );
};

export {CityInfo};
