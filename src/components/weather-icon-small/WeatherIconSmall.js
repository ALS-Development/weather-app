import styled from 'styled-components/native';

export const WeatherSmallIcon = styled.Image.attrs((props) => ({
  source: {
    uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
  },
}))`
  width: ${(props) => props.size || 40}px;
  height: ${(props) => props.size || 40}px;
`;
