import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import axios, {AxiosInstance, AxiosResponse} from 'axios';

import styles from './styles';
import colors from '../../styles/colors';
import Table from '../../components/Table';
import TableRow from '../../components/Table/TableRow';
import SlidingTab from '../../components/SlidingTab';
import RepositoryItems from '../../components/RepositoryItems';
import DevList from '../../components/DevList';
import GitHubApi from './../../services/GitHubApi';
import axios_git from './../../axios';

import API_KEY from '../../googleAPI';

// Quantos Devs você quer que apareçam na lista de devs favoritos da tela de profile?
let devListAmount = 3;

class UserScreen extends Component {
  state = {
    isLoading: true,
    isGPSAllowed: false,
  };

  scrollRef = null;
  scrollViewWidth = 280;

  async componentDidMount() {
    try {
      const resp = await GitHubApi.getUser();
      const user = {
        name:
          resp.data.name !== '' && resp.data.name !== null
            ? resp.data.name
            : '---',
        username:
          resp.data.login !== '' && resp.data.login !== null
            ? resp.data.login
            : '---',
        followers:
          resp.data.followers !== '' && resp.data.followers !== null
            ? resp.data.followers
            : '---',
        site: resp.data.html_url,
        email:
          resp.data.email !== '' && resp.data.email !== null
            ? resp.data.email
            : '---',
        image: resp.data.avatar_url,
        repositories: resp.data.public_repos,
      };

      this.props.dispatch({
        type: 'SET_USER',
        payload: user,
      });

      const resp2 = await GitHubApi.getRepos(user.username);
      const repositories = resp2.data.map(repo => {
        return {
          id: repo.id,
          name: repo.name,
          stars: repo.stars,
          language: repo.language,
        };
      });

      this.props.dispatch({
        type: 'SET_REPO',
        payload: repositories,
      });

      this.setState({isLoading: false});
    } catch (error) {
      console.log('Erro: ', error);
    }

    this.getLocation();
  }

  hasLocationPermission = async () => {
    if (
      Platform.OS === 'ios' ||
      (Platform.OS === 'android' && Platform.Version < 23)
    ) {
      this.setState({isGPSAllowed: true});
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      this.setState({isGPSAllowed: true});
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      this.setState({isGPSAllowed: true});
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }
    this.setState({isGPSAllowed: false});
    return false;
  };

  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    Geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        axios
          .get(
            'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
              latitude +
              ',' +
              longitude +
              '&key=' +
              API_KEY,
          )
          .then(async resp => {
            const cidade =
              resp.data.results[0].address_components[3].short_name;
            const estado =
              resp.data.results[0].address_components[4].short_name;
            const position = {
              city: cidade,
              state: estado,
            };
            await AsyncStorage.setItem('city', position.city);
            await AsyncStorage.setItem('state', position.state);
            this.props.dispatch({
              type: 'SET_LOCATION',
              payload: position,
            });
          })
          .catch(error => {
            console.log('Erro no fetch com a API do google: ', error);
          });
      },
      error => {
        //   this.setState({ location: error, loading: false });
        console.log('ERRO: ', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 50,
        forceRequestLocation: true,
      },
    );
  };

  scrollHandler = xValue => {
    this.scrollRef.scrollTo({x: xValue});
  };

  render() {
    let content_screen = (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );

    if (!this.state.isLoading) {
      const chosenFavorites = [];
      if (this.props.favorites.length < devListAmount) {
        devListAmount = this.props.favorites.length;
      }
      for (let i = 0; i < devListAmount; i++) {
        chosenFavorites.push(this.props.favorites[i]);
      }
      content_screen = (
        <View style={styles.userScreenContainer}>
          <View style={styles.bar}>
            <Text style={styles.barLabel}> Perfil</Text>
          </View>
          <View style={styles.profileLayout}>
            <View style={styles.devNameView}>
              <Text
                style={{
                  color: colors.themeColor,
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                {this.props.dev.name}
              </Text>
            </View>
            <View style={styles.imageView}>
              <Image
                style={{width: '100%', height: '100%', borderRadius: 70}}
                source={{uri: this.props.dev.image}}
              />
            </View>

            <View style={styles.sectionA}>
              <View style={styles.cardA1}>
                {this.props.local.city &&
                this.props.local.state &&
                this.state.isGPSAllowed ? (
                  <Text style={styles.locationLabel}>
                    {this.props.local.city}-{this.props.local.state}
                  </Text>
                ) : (
                  <TouchableOpacity onPress={() => this.getLocation()}>
                    <Text style={styles.getLocationBtn}>Obter Localização</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.cardA2}>
                <View
                  style={{
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-around',
                    height: '70%',
                  }}>
                  <Table rowNumber={3} tableWidth={160}>
                    <TableRow
                      label="Username"
                      value={this.props.dev.username}
                    />
                    <TableRow
                      label="Seguidores"
                      value={this.props.dev.followers}
                    />
                    <TableRow
                      label="Repositórios"
                      value={this.props.dev.repositories}
                    />
                  </Table>
                  <Button
                    disabled={!this.state.isGPSAllowed}
                    title="Busque um Dev!"
                    onPress={() => this.props.navigation.navigate('BuscaDevs')}
                    color={colors.themeColor}
                  />
                </View>
              </View>
            </View>

            <View style={styles.sectionB}>
              <SlidingTab
                position={{top: 20, left: '5%'}}
                labelTab1="Repositórios"
                labelTab2="Favoritos"
                scrollViewWidth={this.scrollViewWidth}
                scroll={this.scrollHandler}
              />

              <Text style={styles.infoBtn}></Text>
              <View style={styles.cardB1}></View>
              <View style={styles.cardB2}>
                <View
                  style={{
                    width: 280,
                    height: '90%',
                    backgroundColor: 'white',
                    marginTop: 20,
                    alignSelf: 'center',
                    borderRadius: 20,
                  }}>
                  <ScrollView
                    ref={scroll => {
                      if (scroll !== null && this.scrollRef !== scroll) {
                        this.scrollRef = scroll;
                      }
                    }}
                    scrollEnabled={false}
                    horizontal={true}>
                    <View
                      style={{
                        backgroundColor: colors.themeColor,
                        height: '100%',
                        width: this.scrollViewWidth,
                        borderRadius: 20,
                      }}>
                      <View
                        style={{
                          borderRadius: 40,
                          backgroundColor: 'white',
                          margin: 5,
                          padding: 10,
                          width: '96%',
                          height: '96%',
                        }}>
                        <RepositoryItems data={this.props.repositoryData} />
                      </View>
                    </View>

                    <View
                      style={{
                        backgroundColor: colors.themeColor,
                        height: '100%',
                        width: this.scrollViewWidth,
                        borderRadius: 20,
                      }}>
                      <View
                        style={{
                          borderRadius: 40,
                          backgroundColor: 'white',
                          margin: 5,
                          padding: 10,
                          width: '96%',
                          height: '96%',
                        }}>
                        <DevList data={chosenFavorites} />
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    }
    return content_screen;
  }
}

const mapStateToProps = state => {
  return {
    token: state.access_token,
    dev: state.user,
    local: state.userLocation,
    repositoryData: state.repositories,
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(UserScreen);
