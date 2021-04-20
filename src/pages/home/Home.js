import SunInfo from 'components/sun-info';
import React, {useEffect} from 'react';
import Current from 'components/current';
import Daily from 'components/daily';
import Hourly from 'components/hourly';
import WeatherDetails from 'components/weather-details';
import Loading from 'components/loading';
import Error from 'components/error';
import AppContainer from 'components/app-container';
import {useConsumer} from '../../context/ConsumerProvider';
import {ScrollView, DailyContent, HourlyContent} from './styles';
import {useLocation} from '../../context/LocationProvider';

const Home = () => {
  const consumer = useConsumer();
  const location = useLocation();

  useEffect(() => {
    if (location.lat && location.long) {
      requestWeather();
    }
  }, [location.lat, location.long]);

  const requestWeather = () => {
    consumer.callApi(location.lat, location.long);
  };

  const Page = () => (
    <ScrollView>
      <Current reload={requestWeather} />
      <WeatherDetails />
      <SunInfo />
      <HourlyContent>
        <Hourly />
      </HourlyContent>
      <DailyContent>
        <Daily />
      </DailyContent>
    </ScrollView>
  );

  return (
    <AppContainer>
      {!consumer.loading && !consumer.errorApi && consumer.weather && <Page />}
      {consumer.loading && <Loading />}
      {consumer.errorApi && (
        <Error
          message="Não conseguimos buscar as informações de clima"
          onPress={requestWeather}
          showButton
        />
      )}
      {location.errorLocation && (
        <Error
          message="Erro ao obter sua localização"
          description="Ative sua localização para ver as informações do clima"
        />
      )}
      {location.errorPermission && (
        <Error
          message="Você precisa permitir acesso a sua localização pra continuar"
          description="Para conseguir ver as informações de clima, permita o uso da localização nas configurações do seu dispositivo"
        />
      )}
    </AppContainer>
  );
};

export {Home};
