import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import GitHubApi from './../../services/GitHubApi';
import LinearGradient from 'react-native-linear-gradient';
import colors from './../../styles/colors';
import styles from './styles';
import Loading from '../../components/Loading';

class Login extends Component {
  state = {
    isLoading: true,
    email: '',
    password: '',
    disabled: false,
  };

  abilited = x => {
    this.setState({disabled: x});
  };

  onLoginHandler = async () => {
    this.abilited(true);
    await this.__authorize();
    this.props.navigation.navigate('UserScreen');
  };

  __authorize = async () => {
    try {
      const token = await GitHubApi.login();
      if (token) {
        this.props.dispatch({
          type: 'SET_TOKEN',
          payload: token,
        });
        return true;
      }
    } catch (error) {
      console.log('error', error);
    }
    this.abilited(true);
  };

  getToken = async () => {
    const token = await GitHubApi.getToken();
    if (token) {
      this.props.dispatch({
        type: 'SET_TOKEN',
        payload: token,
      });
      this.props.navigation.navigate('UserScreen');
    } else {
      this.setState({isLoading: false});
    }
  };

  async componentDidMount() {
    await this.getToken();
  }

  render() {
    const {disabled} = this.state;
    if (this.state.isLoading) {
      return <Loading />;
    }
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

        <TouchableOpacity
          onPress={() => {
            if (!disabled) {
              this.onLoginHandler();
            }
          }}>
          <View style={styles.git}>
            <Image
              style={styles.headerPass}
              source={require('../../assets/images/GitHub-Mark-Light-32px.png')}
            />
            <Text style={[styles.textButton, {marginLeft: 15}]}>
              Login: GitHub
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

export default connect()(Login);
