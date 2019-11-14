import styled from 'styled-components';
import normalize from 'react-native-normalize';

const container = {
  flex: 1,
  backgroundColor: '#ad7',
  justifyContent:'space-between'
}

const Header = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: ${normalize(103)}px;
`;

const Logo = styled.Image`
  height: ${normalize(103)}px;
  width: ${normalize(103)}px;
`;

const AppName = styled.Text`
  font-size: ${normalize(33)}px;
  margin-left: ${normalize(13)}px;
  color: #57b4fd;
  font-style: italic;
  font-weight: bold;
`;

const LoginBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-self: center;
  margin-top: ${normalize(53)}px;
  align-items: center;
  justify-content: center;
  height: ${normalize(53)}px;
  width: ${normalize(203)}px;
  border-color: #fff;
  border-width: ${normalize(3)}px;
  margin-bottom: ${normalize(103)}px;
`;

const GitIcon = styled.Image`
  height: ${normalize(28)}px;
  width: ${normalize(28)}px;
`;

const GitText = styled.Text`
  color: white;
  font-size: ${normalize(23)}px;
  font-style: italic;
  font-weight: bold;
  margin-left: ${normalize(18)}px;
`;

export {
  container,
  Header,
  Logo,
  AppName,
  LoginBtn,
  GitIcon,
  GitText
}