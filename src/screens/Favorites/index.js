import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {NavigationEvents} from 'react-navigation';
import {connect} from 'react-redux';
import GitHubApi from '../../services/GitHubApi';

import styles from './styles';
import SearchBar from '../../components/SearchBar';
import DevFromList from '../../components/DevFromList';

class Favorites extends Component {
  /**
   * @type {{isLoading: boolena, devs:[{key: number}]}} state
   */
  state = {
    devs: [],
    isLoading: true,
    shouldUpdate:true
  };

  fetchFavorite = async (username) => {
      const resp = await GitHubApi.getUserByUsername(username);
      return {
        name:resp.data.name,
        username:resp.data.login,
        followers:resp.data.followers,
        url:resp.data.url,
        image:resp.data.avatar_url
      }
  }

  fetchUrlList =  async () => {
    if(this.props.favorites.length){
      const devList = this.props.favorites.map(async username => {
        const dev = await this.fetchFavorite(username);
        return dev;
      });
      (async () => {
        const devs = await Promise.all(devList);
        this.setState({isLoading:false,devs:devs,shouldUpdate:false});
      })()
    }
    else{
      this.setState({isLoading:false});
    }
  }

  async componentDidMount() {
    this.fetchUrlList();
  }

  listFooter = () => {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#a99" />;
    }
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
          }}>
          <Text style={styles.btnText}>Carregar Mais</Text>
        </TouchableOpacity>
      </View>
    );
  };

  forceComponentUpdate = () => {
    this.fetchUrlList();
  }

  render() {

    let listContent = <ActivityIndicator size="large" color="#a99" />;

    if(!this.state.isLoading){
      listContent = (
          <View style={styles.listContainer}>
            <FlatList
              data={this.state.devs}
              keyExtractor={(item) => item.username}
              renderItem={({item}) => <DevFromList name={item.name} username={item.username} followers={item.followers} avatar_url={item.image} url={item.url}/>}
              //onEndReached={this.loadMoreData}
              //ListFooterComponent={this.listFooter.bind(this)}
            />
          </View>
      );
    }
    
    return (
      <View style={styles.container}>
        <NavigationEvents
            onDidFocus={payload => this.forceComponentUpdate()}
        />
        <SearchBar />
          {listContent}
        <Button
          title="Voltar para a HOME"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

Favorites.navigationOptions = {
  title: 'Favorites',
};

const mapStateToProps = (state) => {
  return {
    token: state.access_token,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps)(Favorites);
