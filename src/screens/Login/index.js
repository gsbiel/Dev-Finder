import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TextInput, TouchableOpacity, Text, View, Image} from 'react-native';
import GitHubApi from './../../services/GitHubApi';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

class Login extends Component {
  state = {
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
    }
  };

  async componentDidMount() {
    await this.getToken();
  }

  render() {
    const {email, password, disabled} = this.state;
    const {navigate} = this.props.navigation;

    return (
      <LinearGradient colors={['rgba(0,0,0,0.8)', '#57b4fd','rgba(0,0,0,0.8)']} style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/images/alvo.png')}
          />

          <Text style={styles.headerText}>Dev Finder</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigate('DevDetails')}>
            <View style={styles.botoes}>
              <Text style={styles.textButton}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('DevDetails')}>
            <View style={styles.botoes}>
              <Text style={styles.textButton}>Registrar</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 20,
              width: 200,
              borderBottomWidth: 1,
              borderBottomColor: 'white',
            }}>
            <Image
              style={styles.headerMail}
              source={require('../../assets/images/ic_mail_24px.png')}
            />
            <TextInput
              style={styles.input}
              autoCompleteType="email"
              value={email}
              keyboardType="email-address"
              placeholder="nome@gmail.com"
              onChangeText={text => this.setState({email: text})}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 20,
              width: 200,
              borderBottomWidth: 1,
              borderBottomColor: 'white',
            }}>
            <Image
              style={styles.headerPass}
              source={require('../../assets/images/padlock-unlocked.png')}
            />
            <TextInput
              style={styles.input}
              autoCompleteType="password"
              secureTextEntry={true}
              value={password}
              placeholder="Password"
              onChangeText={text =>
                this.setState({password: text, disabled: false})
              }
            />
          </View>

          <TouchableOpacity onPress={() => navigate('DevDetails')}>
            <View style={styles.touchable}>
              <Text style={styles.textButton}>Login</Text>
            </View>
          </TouchableOpacity>
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
            <Text style={[styles.textButton, {marginLeft: 15}]}>GitHub</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

export default connect()(Login);
