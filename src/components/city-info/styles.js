import styled from 'styled-components/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Text from 'components/text';

export const Container = styled.View`
  background-color: ${({theme}) => theme.palette.primaryDark};
  width: 48%;
  border-radius: ${({theme}) => theme.shape.borderRadius};
  padding: 10px;
`;

export const ContentTempIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(Fontisto).attrs((props) => ({
  name: props.name,
}))`
  color: ${({theme}) => theme.palette.primaryLight};
  margin-right: 5px;
  font-size: ${({theme}) => theme.typography.iconSmall}px;
`;

export const Info = styled(Text)`
  font-size: ${({theme}) => theme.typography.small}px;
`;

export const Temperature = styled(Text)`
  font-size: ${({theme}) => theme.typography.title}px;
`;

export const CityName = styled(Text)`
  font-size: ${({theme}) => theme.typography.normal}px;
`;

export const Country = styled(Text)`
  color: ${({theme}) => theme.palette.primaryLight};
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: ${({theme}) => theme.typography.small}px;
`;
