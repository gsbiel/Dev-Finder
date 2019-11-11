import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import GitHubApi from './../../services/GitHubApi';

import {
    AppHeader,
    AppLogo,
    HeaderText,
    Text,
    StartBtn,
    TextBtn,
    container
} from './styles';

import colors from './../../styles/colors';

export default class Inicio extends React.PureComponent {
  state = {
    nextPage: 'Login',
  };

  async componentDidMount() {
    await this.getToken();
  }
  
  getToken = async () => {
    const token = await GitHubApi.getToken();
    if (token && token.length) {
      this.setState({nextPage: 'UserScreen'});
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    const nextPage = this.state.nextPage;
    return (
      <LinearGradient
        colors={colors.linearGradientColors}
        style={container}>
        <AppHeader>
          <AppLogo
            source={require('../../assets/images/alvo.png')}
          />
          <HeaderText>Dev Finder</HeaderText>
        </AppHeader>

        <Text>
          Aqui no Dev Finder, você localiza{'\n\n'}
          os desenvolvedore de software mais{'\n\n'}
          próximos de sua região e de acordo{'\n\n'}
          com o seu perfil de busca.
        </Text>

        <StartBtn onPress={() => navigate(nextPage)}>
            <TextBtn>Iniciar</TextBtn>
        </StartBtn>
      </LinearGradient>
    );
  }
}
