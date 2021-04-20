import Text from 'components/text';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

export const ContainerCentered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.Image.attrs({
  source: {
    uri:
      'https://media-exp1.licdn.com/dms/image/C5603AQFD_md52sa-aQ/profile-displayphoto-shrink_800_800/0/1517884331186?e=1624492800&v=beta&t=Gvi1fCpVc92_q3wULtmw_81M7glUG51JEHjKgaWJM1g',
  },
})`
  width: ${width * 0.4}px;
  height: ${width * 0.4}px;
  border-radius: ${(width * 0.4) / 2}px;
`;

export const Name = styled(Text)`
  font-size: ${({theme}) => theme.typography.normal}px;
  margin: 20px;
`;

export const Description = styled(Text)`
  font-size: ${({theme}) => theme.typography.subtitle}px;
  margin: 0px 30px;
  text-align: center;
`;

export const ButtonText = styled(Text)`
  font-size: ${({theme}) => theme.typography.button}px;
`;

export const LinkedInButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: ${({theme}) => theme.shape.borderRadius};
  border-width: 1px;
  border-color: ${({theme}) => theme.palette.text};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
`;

export const ButtonIcon = styled(Icon).attrs({
  name: 'linkedin',
})`
  color: ${({theme}) => theme.palette.text};
  font-size: ${({theme}) => theme.typography.icon}px;
  margin-right: 10px;
`;

export const Source = styled(Text)`
  text-align: center;
  margin: 10px;
`;
