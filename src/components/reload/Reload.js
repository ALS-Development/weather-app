import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Reload = styled(Icon).attrs({
  name: 'reload1',
})`
  font-size: ${({theme}) => theme.typography.icon}px;
  margin-top: 10px;
  color: ${({theme}) => theme.palette.text};
`;
