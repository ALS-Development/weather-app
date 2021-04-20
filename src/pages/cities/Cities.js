import React, {useContext, useEffect} from 'react';
import Loading from 'components/loading';
import Error from 'components/error';
import CityInfo from 'components/city-info';
import AppContainer from 'components/app-container';
import {RefreshControl} from 'react-native';
import {ThemeContext} from 'styled-components';
import {useConsumer} from '../../context/ConsumerProvider';
import {CitiesList, Separator} from './styles';

const Cities = () => {
  const consumer = useConsumer();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    requestWeather();
  }, []);

  const Page = () => (
    <CitiesList
      data={consumer.cities}
      keyExtractor={(item) => String(item.id)}
      numColumns={2}
      renderItem={({item}) => <CityInfo key={item.id} city={item} />}
      ItemSeparatorComponent={Separator}
      refreshControl={
        <RefreshControl
          refreshing={consumer.loadingCities}
          onRefresh={requestWeather}
          tintColor={theme.palette.text}
        />
      }
    />
  );

  const requestWeather = () => {
    consumer.getCities();
  };

  return (
    <AppContainer>
      {!consumer.loadingCities &&
        !consumer.errorCities &&
        consumer.cities.length > 0 && <Page />}
      {consumer.loadingCities && <Loading />}
      {consumer.errorCities && (
        <Error
          message="Ocorreu um erro ao carregar as informações"
          onPress={requestWeather}
          showButton
        />
      )}
    </AppContainer>
  );
};

export {Cities};
