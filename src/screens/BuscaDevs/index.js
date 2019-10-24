import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Button,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
//import SearchBar from '../../components/SearchBar';
import DevFromList from '../../components/DevFromList';
//import {axios_git} from '../../axios';
import GitHubApi from '../../services/GitHubApi';


class BuscaDevs extends Component {
  /**
   * @type {{isLoading: boolena, devs:[{key: number}]}} state
   */
  state = {
    devs: [],
    page: 1,
    amount: 0,
    isLoading: true,
    loaded:false
  };

  user = async (login) => {
    const dev = this.state.devs;
    const usuario = await GitHubApi.getUserByUsername(login);
          dev.push(usuario.data); 
          this.setState({devs: dev})
               
        if(this.state.devs.length === this.state.amount) this.setState({loaded:true});
  }

  componentDidMount() {
    this.setState({loaded: false, page:1, devs:[]});
    this.addDev(); 
  }

  addDev = async () => {
    const city = await AsyncStorage.getItem('city');
    const state = await AsyncStorage.getItem('state');
    const cityArray = city.split(' ');
    const cityString = cityArray.reduce((acumulator,next)=>{
      return acumulator+'/'+next;
    })
    const local = `${cityString}/${state}`
    const page = this.state.page;
    const resp = await GitHubApi.getUsersByLocation(local, page);
    console.log(resp.headers['x-ratelimit-remaining'])
    this.setState({page: page+1, amount: resp.data.items.length});  
    resp.data.items.map(u => {
        this.user(u.login);                 
    });
  };

  loadMoreData = (x) => {
    if(x == true) {
      this.setState({loaded: false, devs:[]});
      this.addDev();
    }
  };

  listFooter = () => {
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.loadMoreData(true);
          }}>
          <Text style={styles.btnText}>Próxima página</Text>
        </TouchableOpacity>
      </View>
    );
  };


  render() {

    return (
      <LinearGradient colors={['rgba(0,0,0,0.8)', '#57b4fd','rgba(0,0,0,0.8)']} style={styles.container}>
        <View style={styles.listContainer}>

          {this.state.page > 2 && (<TouchableOpacity onPress={() => {this.setState({page:this.state.page - 2}), this.loadMoreData(true)}} style={styles.btnAnt}>
          <Text style={styles.btnText}>Página anterior</Text>
          </TouchableOpacity>)}

          {!this.state.loaded && (
            <View style={{top:'50%'}}>
              <ActivityIndicator size="large" color="white" />
            </View>
          )}

          {this.state.loaded && (<FlatList
            data={this.state.devs}
            keyExtractor={(item, index) => `${item.key}-${index}`}
            renderItem={({item})=>{
                return (
                       <DevFromList avatar_url={item.avatar_url} name={item.name} username={item.login} followers={item.followers} />
                );
            }}
            onEndReached={this.loadMoreData}
            ListFooterComponent={this.listFooter.bind(this)}
          />)}
        </View>
        <Button
          title="Voltar para a HOME"
          onPress={() => {
            this.props.navigation.navigate('UserScreen');
          }}
        />
      </LinearGradient>
    );
  }
}

BuscaDevs.navigationOptions = {
  title: 'BuscaDevs',
};

const mapStateToProps = (state) => {
  return {
    token: state.access_token
  }
}

export default connect(mapStateToProps)(BuscaDevs);
