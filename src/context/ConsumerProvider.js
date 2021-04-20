import CITIES from 'constants/cities';
import React, {createContext, useCallback, useContext, useState} from 'react';
import {OpenWeatherApi} from 'services/open-weather-api';

const ConsumerContext = createContext(null);

const ConsumerProvider = ({children}) => {
  const callApi = useCallback(async (lat, long) => {
    setValue((state) => ({
      ...state,
      loading: true,
      errorApi: false,
    }));
    try {
      const {data: weather} = await OpenWeatherApi.getCurrentWeather(lat, long);
      const {data: location} = await OpenWeatherApi.getNameByLocation(
        lat,
        long,
      );
      setValue((state) => ({
        ...state,
        loading: false,
        errorApi: false,
        weather: {...weather, locationName: location[0].name},
      }));
    } catch (error) {
      setValue((state) => ({
        ...state,
        loading: false,
        errorApi: true,
      }));
    }
  }, []);

  const getCities = useCallback(async () => {
    setValue((state) => ({
      ...state,
      loadingCities: true,
      errorCities: false,
    }));
    try {
      const response = await Promise.all(
        CITIES.map((city) => OpenWeatherApi.getWeatherByCity(city)),
      );
      const cities = response.map((info) => info.data);
      setValue((state) => ({
        ...state,
        loadingCities: false,
        errorCities: false,
        cities,
      }));
    } catch (error) {
      setValue((state) => ({
        ...state,
        loadingCities: false,
        errorCities: true,
      }));
    }
  }, []);

  const [value, setValue] = useState({
    loading: true,
    errorApi: false,
    weather: null,
    callApi,
    getCities,
    loadingCities: false,
    errorCities: false,
    cities: [],
  });

  return (
    <ConsumerContext.Provider value={value}>
      {children}
    </ConsumerContext.Provider>
  );
};

const useConsumer = () => useContext(ConsumerContext);

export {ConsumerProvider as default, useConsumer};
