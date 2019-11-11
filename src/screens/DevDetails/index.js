import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {delFavorite,addFavorite} from '../../actions/actions';
import {connect} from 'react-redux';

import {NavigationEvents} from 'react-navigation';

import LikeBtn from '../../components/LikeBtn';
import Loading from '../../components/Loading';
import RepositoryItems from '../../components/RepositoryItems';
import DevInfoItem from '../../components/DevInfoItem';
import SlidingTab from '../../components/SlidingTab';
import GitHubApi from '../../services/GitHubApi';
import colors from '../../styles/colors';

import {
  container, 
  devInfoContainer,
  devReposContainer,
  BackCard, 
  FrontalCard, 
  ReturnBtn, 
  ImageBox, 
  DevImage, 
  DevName, 
  OuterBord, 
  ScrollBoard, 
} from './styles';

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
        style={container}>
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
        <BackCard />
        <View
          style={{
            position: 'absolute',
            top: '6%',
            left: '5%',
          }}>
            <ReturnBtn onPress={() => this.props.navigation.goBack()}>
                <Text style={{color: 'white', padding: 3}}>Voltar</Text>
            </ReturnBtn>
        </View>
        <ImageBox>
            <DevImage
              source={{uri: dev.avatar_url}}
            />
        </ImageBox>
        {/* ---------------------------------------------------------------- */}
        <FrontalCard>
          <DevName>{dev.name ? dev.name : '----'}</DevName>
          <LikeBtn 
            isFavorite={this.state.isFavorite} 
            likeHandler={this.onLikeHandler}
            isFavoriteLoading={this.props.isFavoriteLoading}/>
          <SlidingTab
            labelTab1="Detalhes"
            labelTab2="Repositórios"
            scrollViewWidth={scrollViewWidth}
            scroll={this.scrollHandler}
          />
          <OuterBord scrollViewWidth={scrollViewWidth}>
            <ScrollView
              ref={scrollView => {
                if (scrollView !== null && this.scrollView !== scrollView) {
                  this.scrollRef = scrollView;
                }
              }}
              scrollEnabled={false}
              horizontal={true}>
              <ScrollBoard theme={colors.themeColor} scrollViewWidth={scrollViewWidth}>
                <LinearGradient
                  colors={colors.secondaryGradient}
                  style={devInfoContainer}>
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
              </ScrollBoard>
              <ScrollBoard theme={colors.themeColor} scrollViewWidth={scrollViewWidth}>
                <LinearGradient
                  colors={colors.secondaryGradient}
                  style={devReposContainer}>
                  {this.state.showRepos ? <RepositoryItems data={repositoryData} /> : <Loading/>}
                </LinearGradient>
              </ScrollBoard>
            </ScrollView>
          </OuterBord>
        </FrontalCard>
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
