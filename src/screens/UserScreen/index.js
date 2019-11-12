import React, {Component} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  ToastAndroid,
  Dimensions
} from 'react-native';
import {
  setFavorites,
  setUser,
  setRepositories,
  setLocation,
  setLocationPermissions
} from '../../actions/actions';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from 'react-native-geolocation-service';
import {connect} from 'react-redux';
import axios from 'axios';
import {NavigationEvents} from 'react-navigation';
import {
    firstGradient,
    secondGradient,
    thirdGradient,
    Screen,
    Profile,
    UserName,
    Name,
    ImageBox,
    UserImage,
    UserDataSection,
    GitDataSection,
    LocationLabel,
    GetLocation,
    TableContainer,
    ScrollContainer,
    ScrollBox,
    OuterBorder,
    InnerBorder
} from './styles';
import colors from '../../styles/colors';
import Table from '../../components/Table';
import TableRow from '../../components/Table/TableRow';
import SlidingTab from '../../components/SlidingTab';
import RepositoryItems from '../../components/RepositoryItems';
import DevList from '../../components/DevList';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import GitHubApi from './../../services/GitHubApi';
import {googleAppData} from '../../services/APIData';

// Quantos Devs você quer que apareçam na lista de devs favoritos da tela de profile?
let devListAmount = 3;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class UserScreen extends Component {
  state = {
    isLoading: true,
    isGPSAllowed: false,
    isFavoriteLoading: true,
    isRepoLoading: true,
    firstFavorites: [],
  };

  scrollRef = null;
  scrollViewWidth = 280;

  getLanguages = async fullName => {
    const resp = await GitHubApi.getLanguages(fullName);
    return resp.data;
  };

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
          languages: languages,
        };
      });

      (async () => {
        const repositoryData = await Promise.all(repositories);
        //this.setState({repositoryData: repositoryData, showRepos:true});
        this.props.dispatch(setRepositories(repositoryData));
        this.setState({isLoading: false, isRepoLoading: false});
      })();
    } catch (error) {
      console.log('Erro: ', error);
    }

    this.fetchChosenFavorites();
    this.getLocation();
    this.setState({isLoading: false});
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
      this.props.dispatch(setLocationPermissions(true));
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      this.setState({isGPSAllowed: true});
      this.props.dispatch(setLocationPermissions(true));
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
              googleAppData.API_KEY,
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
    } else {
      const favoritesJSON = await AsyncStorage.getItem(this.props.dev.login);
      const favorites = JSON.parse(favoritesJSON);
      if (favorites.favorites.length) {
        await this.props.dispatch(setFavorites(favorites.favorites));
        this.fetchChosenFavorites();
      }
      this.setState({
        isFavoriteLoading: false,
      });
    }
  };

  forceComponentUpdate = () => {
    if(this.props.favorites.length){
      this.fetchChosenFavorites();
    }else{
      this.setState({firstFavorites:[]});
    } 
  };

  componentWillUnmount() {
    console.log('UserScreen está desmontando..');
  }

  render() {
    let content_screen = <Loading />;

    if (!this.state.isLoading) {
      const chosenFavorites = [];
      let listAmount = devListAmount;
      if (this.props.favorites.length < devListAmount) {
        listAmount = this.props.favorites.length;
      }
      for (let i = 0; i < listAmount; i++) {
        chosenFavorites.push(this.props.favorites[i]);
      }
      content_screen = (
        <Screen screenWidth={screenWidth} screenHeight={screenHeight}>
          <NavigationEvents
            onDidFocus={payload => this.forceComponentUpdate()}
          />
          <Header label="Perfil" />
          <Profile>
            <UserName>
              <Name theme={colors.themeColor}>
                {this.props.dev.name}
              </Name>
            </UserName>
            <ImageBox>
              <UserImage source={{uri: this.props.dev.avatar_url}}/>
            </ImageBox>
            <UserDataSection>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={colors.linearGradientColors}
                style={firstGradient}>
                {this.props.local.city &&
                this.props.local.state &&
                this.state.isGPSAllowed ? (
                  <LocationLabel>
                    {this.props.local.city}-{this.props.local.state}
                  </LocationLabel>
                ) : (
                  <TouchableOpacity onPress={() => this.getLocation()}>
                    <GetLocation>Obter Localização</GetLocation>
                  </TouchableOpacity>
                )}
              </LinearGradient>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={colors.secondaryGradient}
                style={secondGradient}>
                <TableContainer>
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
                </TableContainer>
              </LinearGradient>
            </UserDataSection>

            <GitDataSection>
              <SlidingTab
                position={{top: 0, left: '5%'}}
                labelTab1="Repositórios"
                labelTab2="Favoritos"
                scrollViewWidth={this.scrollViewWidth}
                scroll={this.scrollHandler}
              />

              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={colors.linearGradientColors}
                style={thirdGradient}></LinearGradient>
              <ScrollContainer>
                <ScrollBox>
                  <ScrollView
                    ref={scroll => {
                      if (scroll !== null && this.scrollRef !== scroll) {
                        this.scrollRef = scroll;
                      }
                    }}
                    scrollEnabled={false}
                    horizontal={true}
                  >
                    <OuterBorder theme={colors.themeColor} scrollWidth={this.scrollViewWidth}>
                      <InnerBorder>
                        {this.state.isRepoLoading ? (
                          <Loading />
                        ) : (
                          <RepositoryItems data={this.props.repositoryData} />
                        )}
                      </InnerBorder>
                    </OuterBorder>

                    <OuterBorder theme={colors.themeColor} scrollWidth={this.scrollViewWidth}>
                      <InnerBorder>
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
                      </InnerBorder>
                    </OuterBorder>

                  </ScrollView>
                </ScrollBox>
              </ScrollContainer>
            </GitDataSection>
          </Profile>
        </Screen>
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
