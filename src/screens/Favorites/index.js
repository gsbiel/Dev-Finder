import React, {Component} from 'react';
import {
  FlatList,
  ActivityIndicator
} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {connect} from 'react-redux';
import GitHubApi from '../../services/GitHubApi';
import DevFromList from '../../components/DevFromList';
import Header from '../../components/Header';
import {
  Container,
  FavoriteList,
  Footer,
  LoadMoreBtn,
  TextBtn
} from './styles';
import colors from '../../styles/colors';

class Favorites extends Component {
  /**
   * @type {{isLoading: boolena, devs:[{key: number}]}} state
   */
  state = {
    devs: [],
    isLoading: true,
    shouldUpdate: true,
  };

  fetchFavorite = async username => {
    const resp = await GitHubApi.getUserByUsername(username);
    return resp.data;
  };

  fetchUrlList = async () => {
    if (this.props.favorites.length) {
      const devList = this.props.favorites.map(async username => {
        const dev = await this.fetchFavorite(username);
        return dev;
      });
      (async () => {
        const devs = await Promise.all(devList);
        this.setState({isLoading: false, devs: devs, shouldUpdate: false});
      })();
    } else {
      this.setState({isLoading: false});
    }
  };

  async componentDidMount() {
    this.fetchUrlList();
  }

  listFooter = () => {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#a99" />;
    }
    return (
      <Footer>
        <LoadMoreBtn onPress={() => {}}>
          <TextBtn>Carregar Mais</TextBtn>
        </LoadMoreBtn>
      </Footer>
    );
  };

  forceComponentUpdate = () => {
    this.fetchUrlList();
  };

  render() {
    let listContent = <ActivityIndicator size="large" color="#a99" />;

    if (!this.state.isLoading) {
      listContent = (
        <FavoriteList>
          <FlatList
            data={this.state.devs}
            keyExtractor={item => item.login}
            renderItem={({item}) => <DevFromList user={item} />}
          />
        </FavoriteList>
      );
    }
    return (
      <Container background={colors.favoritesBackg}>
        <NavigationEvents onDidFocus={() => this.forceComponentUpdate()} />
        <Header label="Favoritos" />
        {listContent}
      </Container>
    );
  }
}

Favorites.navigationOptions = {
  title: 'Favorites',
};

const mapStateToProps = state => {
  return {
    token: state.access_token,
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
