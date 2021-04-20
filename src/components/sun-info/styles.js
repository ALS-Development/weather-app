import styled from 'styled-components/native';

const line = require('assets/line.png');
const sunset = require('assets/sunset.png');
const sunrise = require('assets/sunrise.png');

export const Container = styled.View`
  margin-top: 10px;
`;

export const DecorationLine = styled.Image.attrs({
  source: line,
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 40px;
`;

export const SunriseIcon = styled.Image.attrs({
  source: sunrise,
})`
  width: ${({theme}) => theme.typography.icon}px;
  height: ${({theme}) => theme.typography.icon}px;
`;

export const SunsetIcon = styled.Image.attrs({
  source: sunset,
})`
  width: ${({theme}) => theme.typography.icon}px;
  height: ${({theme}) => theme.typography.icon}px;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${({theme}) => theme.spacing(2)}px;
`;

export const Right = styled(Left)`
  justify-content: flex-end;
  margin-right: ${({theme}) => theme.spacing(2)}px;
`;

export const Hour = styled.Text`
  color: ${(props) => props.theme.palette.text};
  font-size: ${({theme}) => theme.typography.normal}px;
  margin: 0px 10px;
`;
