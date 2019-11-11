import styled from 'styled-components';

const container = {
  flex: 1,
  backgroundColor: '#ad7',
  justifyContent:'space-between'
}

const Header = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 100px;
`;

const Logo = styled.Image`
  height: 100px;
  width: 100px;
`;

const AppName = styled.Text`
  font-size: 30px;
  margin-left: 10px;
  color: #57b4fd;
  font-style: italic;
  font-weight: bold;
`;

const LoginBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-self: center;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 200px;
  border-color: #fff;
  border-width: 1px;
  margin-bottom: 100px;
`;

const GitIcon = styled.Image`
  height: 25px;
  width: 25px;
`;

const GitText = styled.Text`
  color: white;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  margin-left: 15px;
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