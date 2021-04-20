import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

export default {
  unixToHourAmPm: (timestamp) => moment(timestamp * 1000).format('hh A'),
  unixToHour: (timestamp) => moment(timestamp * 1000).format('hh:mm A'),
  unixToDayOfWeek: (timestamp) => moment(timestamp * 1000).format('dddd'),
  celsius: (value) => `${parseFloat(value).toFixed(0)}º`,
  hPaTomBar: (value) => value / 100,
};
