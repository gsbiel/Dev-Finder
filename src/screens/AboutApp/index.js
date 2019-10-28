import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import GitHubApi from './../../services/GitHubApi';
import colors from './../../styles/colors';

export default class Inicio extends React.PureComponent {
  state = {
    nextPage: 'login',
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
        style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/images/alvo.png')}
          />

          <Text style={styles.headerText}>Dev Finder</Text>
        </View>

        <Text style={styles.text}>
          Aqui no Dev Finder, você localiza{'\n\n'}
          os desenvolvedore de software mais{'\n\n'}
          próximos de sua região e de acordo{'\n\n'}
          com o seu perfil de busca.
        </Text>

        <TouchableOpacity onPress={() => navigate(nextPage)}>
          <View style={styles.touchable}>
            <Text style={styles.textButton}>Iniciar</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
