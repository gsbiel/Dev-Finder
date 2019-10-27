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
  ToastAndroid
} from 'react-native';

import {setFavorites,setUser,setRepositories,setLocation} from '../../actions/actions';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from 'react-native-geolocation-service';
import {connect} from 'react-redux';
import axios from 'axios';
import {NavigationEvents} from 'react-navigation';
import styles from './styles';
import colors from '../../styles/colors';
import Table from '../../components/Table';
import TableRow from '../../components/Table/TableRow';
import SlidingTab from '../../components/SlidingTab';
import RepositoryItems from '../../components/RepositoryItems';
import DevList from '../../components/DevList';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import GitHubApi from './../../services/GitHubApi';
import API_KEY from '../../googleAPI';

// Quantos Devs você quer que apareçam na lista de devs favoritos da tela de profile?
let devListAmount = 3;

class UserScreen extends Component {
  state = {
    isLoading: true,
    isGPSAllowed: false,
    isFavoriteLoading: true,
    firstFavorites: [],
  };

  scrollRef = null;
  scrollViewWidth = 280;

  getLanguages = async (fullName) => {
    const resp = await GitHubApi.getLanguages(fullName);
    return resp.data;
  } 

  async componentDidMount() {
    try {
      const resp = await GitHubApi.getUser();
      const user = resp.data;

      this.props.dispatch(setUser(user));
      const resp2 = await GitHubApi.getRepos(user.login);
      const repositories = resp2.data.map(async repo => {
        const languagesObj = await this.getLanguages(repo.full_name);
        const languages = Object.keys(languagesObj);
        return {
          id: repo.id,
          name: repo.name,
          stars: repo.stars,
          full_name: repo.full_name,
          languages: languages
        };
      });

      (async ()=> {
        const repositoryData = await Promise.all(repositories);
        //this.setState({repositoryData: repositoryData, showRepos:true});
        this.props.dispatch(setRepositories(repositoryData));
        this.setState({isLoading: false});
      })();
    } catch (error) {
      console.log('Erro: ', error);
    }

    this.fetchChosenFavorites();    
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
        'Permissão para acesso à localização negada. Clique em "Obter Localização" para continuar.',
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
            this.props.dispatch(setLocation(position));
          })
          .catch(error => {
            console.log('Erro no fetch com a API do google: ', error);
          });
      },
      error => {
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

  fetchChosenFavorites = async () => {
    if (this.props.favorites.length) {
      const respArray = [];
      var favLength = 3;
      if (this.props.favorites.length > 0 && this.props.favorites.length < 3) {
        favLength = this.props.favorites.length;
      }
      for (let index = 0; index < favLength; index++) {
        const resp = await GitHubApi.getUserByUsername(
          this.props.favorites[index],
        );
        respArray.push(resp);
      }

      const responses = await Promise.all(respArray);
      const firstFavorites = responses.map(resp => {
        return resp.data;
      });
      this.setState({
        firstFavorites: firstFavorites,
        isFavoriteLoading: false,
      });
    }
    else{
      const favoritesJSON = await AsyncStorage.getItem(this.props.dev.login)
      const favorites = JSON.parse(favoritesJSON);
      if(favorites){
        await this.props.dispatch(setFavorites(favorites.favorites));
        this.fetchChosenFavorites();
      }
      else{
        this.setState({isFavoriteLoading:false});
      }
    }
  };

  forceComponentUpdate = () => {
    this.fetchChosenFavorites();
  };

  render() {
    let content_screen = (
      <Loading />
    );

    if (!this.state.isLoading) {
      const chosenFavorites = [];
      let listAmount= devListAmount;
      if (this.props.favorites.length < devListAmount) {
        listAmount = this.props.favorites.length;
      }
      for (let i = 0; i < listAmount; i++) {
        chosenFavorites.push(this.props.favorites[i]);
      }
      content_screen = (
        <View style={styles.userScreenContainer}>
          <NavigationEvents
            onDidFocus={payload => this.forceComponentUpdate()}
          />
          <Header label="Perfil" />
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
                source={{uri: this.props.dev.avatar_url}}
              />
            </View>

            <View style={styles.sectionA}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.linearGradientColors} style={styles.cardA1}>
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
              </LinearGradient>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.secondaryGradient} style={styles.cardA2}>
                <View
                  style={{
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-around',
                    height: '70%',
                  }}>
                  <Table rowNumber="3" tableWidth="160">
                    <TableRow label="Usuário" value={this.props.dev.login} />
                    <TableRow
                      label="Seguidores"
                      value={this.props.dev.followers}
                    />
                    <TableRow
                      label="Repositórios"
                      value={this.props.dev.public_repos}
                    />
                  </Table>
                  <Button
                    disabled={!this.state.isGPSAllowed}
                    title="Busque um Dev!"
                    onPress={() => this.props.navigation.navigate('BuscaDevs')}
                    color={colors.themeColor}
                  />
                </View>
              </LinearGradient>
            </View>

            <View style={styles.sectionB}>
              <SlidingTab
                position={{top: 0, left: '5%'}}
                labelTab1="Repositórios"
                labelTab2="Favoritos"
                scrollViewWidth={this.scrollViewWidth}
                scroll={this.scrollHandler}
              />

              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors.linearGradientColors} style={styles.cardB1}></LinearGradient>
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
                        {this.state.isFavoriteLoading ? (
                          <View style={{top: '40%'}}>
                            <ActivityIndicator size="large" color="" />
                          </View>
                        ) : (
                          <DevList
                            data={this.state.firstFavorites}
                            navigate={this.props.navigation.navigate}
                            listAmount={devListAmount}
                          />
                        )}
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
