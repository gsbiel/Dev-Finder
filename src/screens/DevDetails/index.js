import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {delFavorite,addFavorite} from '../../actions/actions';
import {connect} from 'react-redux';

import {NavigationEvents} from 'react-navigation';

import Loading from '../../components/Loading';
import RepositoryItems from '../../components/RepositoryItems';
import DevInfoItem from '../../components/DevInfoItem';
import SlidingTab from '../../components/SlidingTab';
import GitHubApi from '../../services/GitHubApi';
import colors from '../../styles/colors';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

const colorTheme = '#030442';

class DevDetails extends React.PureComponent {
  state = {
    isLoading: true,
    isFavorite: false,
    dev: null,
    repositoryData: null,
    isFavoriteLoading: true,
    showRepos:false
  };

  scrollRef = null;


  getLanguages = async (fullName) => {
    const resp = await GitHubApi.getLanguages(fullName);
    return resp.data;
  } 

  async componentDidMount() {

    const user = this.props.navigation.getParam('user');
    const responseRepos = await GitHubApi.getRepos(user.login);
    const repositories = responseRepos.data.map((async repoData=>{
      const name = repoData.name;
      const stars = repoData.stars;
      const id = repoData.id;
      const languagesObj = await this.getLanguages(repoData.full_name);
      const languages = Object.keys(languagesObj);
      return{
          name,
          stars,
          languages,
          id
      }
    }));

    (async ()=>{
      const repositoryData = await Promise.all(repositories);
      const checkFavorite = this.props.favorites.find(dev => {
        return dev === user.login;
      });
  
      this.setState({
        dev: user,
        repositoryData: repositoryData,
        isLoading: false,
        isFavoriteLoading: false,
        isFavorite: checkFavorite ? true : false,
        showRepos:true
      });
    })();

  }

  onLikeHandler = async () => {
    if (this.state.isFavorite) {
      await this.props.dispatch(delFavorite(this.state.dev.login));
      await AsyncStorage.setItem(this.props.user.login,JSON.stringify({
        favorites: this.props.favorites
      }));
      this.setState({isFavorite: false});
    } else {
      await this.props.dispatch(addFavorite(this.state.dev.login));
      await AsyncStorage.setItem(this.props.user.login,JSON.stringify({
        favorites: this.props.favorites
      }));
      this.setState({isFavorite: true});
    }
  };

  scrollHandler = xValue => {
    this.scrollRef.scrollTo({x: xValue});
  };

  setTimer = async (x) => {
    setTimeout(()=>{
      this.setState({showRepos:true});
    },x);
  }

  render() {
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return <Loading />;
    }
    const dev = this.state.dev;
    const repositoryData = this.state.repositoryData;
    let dimensions = Dimensions.get('window');
    let scrollViewWidth = dimensions.width - 20;
    return (
      <LinearGradient
        colors={colors.secondaryGradient}
        style={styles.container}>
        <NavigationEvents
          onDidFocus={() => {
            const checkFavorite = this.props.favorites.find(dev => {
              return dev === this.state.dev.login;
            });
            this.setState({
              isFavorite: checkFavorite ? true : false
            });
          }}
        />
        <View style={styles.cardA} />
        <View
          style={{
            position: 'absolute',
            top: '6%',
            left: '5%',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 5,
                padding: 2,
              }}>
              <Text style={{color: 'white', padding: 3}}>Voltar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 70}}
            source={{uri: dev.avatar_url}}
          />
        </View>
        {/* ---------------------------------------------------------------- */}
        <View style={styles.cardB}>
          <View>
            <Text style={styles.devName}>{dev.name ? dev.name : '----'}</Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              this.state.isFavoriteLoading ? '' : this.onLikeHandler()
            }>
            <View
              style={{
                marginTop: 10,
                alignSelf: 'center',
                flexDirection: 'row',
                borderColor: this.state.isFavorite ? 'green' : '#ccc',
                borderWidth: 1,
                padding: 2,
                borderRadius: 5,
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: this.state.isFavorite ? 'green' : '#ccc',
                  borderRadius: 10,
                }}></View>

              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {this.state.isFavorite ? 'Gostei!' : 'Gostou?'}
              </Text>
            </View>
          </TouchableOpacity>

          <SlidingTab
            labelTab1="Detalhes"
            labelTab2="Repositórios"
            scrollViewWidth={scrollViewWidth}
            scroll={this.scrollHandler}
          />

          <View
            style={{
              borderRadius: 20,
              alignSelf: 'center',
              width: scrollViewWidth - 20,
              height: '70%',
            }}>
            <ScrollView
              ref={scrollView => {
                if (scrollView !== null && this.scrollView !== scrollView) {
                  this.scrollRef = scrollView;
                }
              }}
              scrollEnabled={false}
              horizontal={true}>
              <View
                style={{
                  backgroundColor: colorTheme,
                  height: '100%',
                  width: scrollViewWidth - 20,
                  borderRadius: 20,
                  flex: 1,
                }}>
                <LinearGradient
                  colors={colors.secondaryGradient}
                  style={{
                    flex: 1,
                    margin: 5,
                    padding: 1,
                    borderRadius: 40,
                    backgroundColor: 'white',
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    backgroundColor:"#ccc"
                  }}>
                  <DevInfoItem label="Nome" value={dev.name ? dev.name : '----'} />
                  <DevInfoItem label="Usuário" value={dev.login} />
                  <DevInfoItem
                    label="Seguidores"
                    value={dev.followers.toString()}
                  />
                  <DevInfoItem label="Site" value={dev.blog ? dev.blog : '----'} />
                  <DevInfoItem
                    label="E-mail"
                    value={dev.email ? dev.email : '----'}
                  />
                </LinearGradient>
              </View>
              <View
                style={{
                  backgroundColor: colorTheme,
                  height: '100%',
                  width: scrollViewWidth - 20,
                  borderRadius: 20,
                }}>
                <LinearGradient
                  colors={colors.secondaryGradient}
                  style={{
                    borderRadius: 40,
                    margin: 5,
                    padding: 10,
                    width: '96%',
                    height: '96%',
                  }}>
                  {this.state.showRepos ? <RepositoryItems data={repositoryData} /> : <Loading/>}
                </LinearGradient>
              </View>
            </ScrollView>
          </View>
        </View>
        {/* ---------------------------------------------------------------- */}
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
    user: state.user
  };
};

export default connect(mapStateToProps)(DevDetails);
