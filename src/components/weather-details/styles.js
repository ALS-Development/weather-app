import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Fontisto';
import Text from 'components/text';

export const WeatherDetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

export const DetailsItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetaisItemIcon = styled(Icon).attrs((props) => ({
  name: props.name,
}))`
  font-size: ${({theme}) => theme.typography.iconSmall}px;
  color: ${(props) => props.theme.palette.primary};
  margin-right: 10px;
`;

export const DetailsItemValue = styled(Text)`
  font-size: ${({theme}) => theme.typography.small}px;
`;
