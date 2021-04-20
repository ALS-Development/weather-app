import api from 'services/api';
import qs from 'query-string';

export const OpenWeatherApi = {
  getCurrentWeather: (lat, lon) => {
    const query = {
      lat,
      lon,
      units: 'metric',
      exclude: 'minutely',
      lang: 'pt_br',
      appid: 'dbd9faaf6d9c41a90f45ff578334792e',
    };
    return api.get(qs.stringifyUrl({url: '/data/2.5/onecall', query}));
  },
  getNameByLocation: (lat, lon) => {
    const query = {
      lat,
      lon,
      lang: 'pt_br',
      appid: 'dbd9faaf6d9c41a90f45ff578334792e',
      limit: 1,
    };
    return api.get(qs.stringifyUrl({url: '/geo/1.0/reverse', query}));
  },
  getWeatherByCity: (city) => {
    const query = {
      q: city,
      lang: 'pt_br',
      appid: 'dbd9faaf6d9c41a90f45ff578334792e',
      units: 'metric',
    };
    return api.get(qs.stringifyUrl({url: '/data/2.5/weather', query}));
  },
};
