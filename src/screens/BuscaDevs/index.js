import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {
  container,
  ListContainer,
  LoadingBox,
  PreviousPage,
  NextPage,
  TextBtn,
  Footer
} from './styles';
import colors from '../../styles/colors';
import {connect} from 'react-redux';
import DevFromList from '../../components/DevFromList';
import Header from '../../components/Header';
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
    loaded: false,
  };

  user = async login => {
    const dev = this.state.devs;
    const usuario = await GitHubApi.getUserByUsername(login);
    dev.push(usuario.data);
    this.setState({devs: dev});

    if (this.state.devs.length === this.state.amount)
      this.setState({loaded: true});
  };

  async componentDidMount() {
    if (this.props.hasPermission) {
      this.setState({loaded: false, page: 1, devs: []});
      this.addDev();
    }
    else{
      ToastAndroid.show(
        'Busca falhou pois o acesso à geolocalização foi negado.',
        ToastAndroid.LONG,
      );
      this.props.navigation.navigate('UserScreen');
    }
  }

  addDev = async () => {
    const cityArray = this.props.location.city.split(' ');
    const cityString = cityArray.reduce((acumulator, next) => {
      return acumulator + '/' + next;
    });
    let local = `${cityString}/${this.props.location.state}`;
    const page = this.state.page;
    const amount = this.state.amount;
    const resp = await GitHubApi.getUsersByLocation(local, page);
    this.setState({page: page + 1, amount: resp.data.items.length});
    if(resp.data.items.length > 0){
      resp.data.items.map(u => {
        this.user(u.login);
      });
    }  
  };

  loadMoreData = x => {
    if (x == true) {
      this.setState({loaded: false, devs: []});
      this.addDev();
    }
  };

  listFooter = () => {
    return (
      <Footer>
        {this.state.amount > 0 && this.state.page <= 100 && (
        <NextPage
          onPress={() => {
            this.loadMoreData(true);
          }}>
            <TextBtn>Próxima página</TextBtn>
        </NextPage>)}
      </Footer>
    );
  };

  render() {
    return (
      <LinearGradient
        colors={colors.buscaDevGradient}
        style={container}>
        <NavigationEvents
          onDidFocus={() => {
                            if(!this.props.hasPermission){
                              ToastAndroid.show(
                                'Busca falhou pois o acesso à geolocalização foi negado.',
                                ToastAndroid.LONG,
                              );
                              this.props.navigation.navigate('UserScreen');
                            }else{
                              if(!this.state.devs.length){
                                this.addDev();
                              }
                            }
                          }
                      }
        />
        <Header label={`Desenvolvedores em ${this.props.location.city}`} />
        <ListContainer>
          {this.state.page > 2 && (
            <PreviousPage
              onPress={async () => {
                await this.setState(prevState=>{
                  return {page: prevState.page-2}
                });
                this.loadMoreData(true);
              }}>
                <TextBtn>Página anterior</TextBtn>
            </PreviousPage>
          )}

          {!this.state.loaded && this.state.amount>0 && (
            <LoadingBox>
              <ActivityIndicator size="large" color="#030442" />
            </LoadingBox>
          )}

          {this.state.loaded && (
            <FlatList
              data={this.state.devs}
              keyExtractor={(item, index) => `${item.key}-${index}`}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('DevDetails', {
                        user: item,
                      })
                    }>
                    <DevFromList user={item} />
                  </TouchableOpacity>
                );
              }}
              onEndReached={this.loadMoreData}
              ListFooterComponent={this.listFooter.bind(this)}
            />
          )}
        </ListContainer>
      </LinearGradient>
    );
  }
}

BuscaDevs.navigationOptions = {
  title: 'BuscaDevs',
};

const mapStateToProps = state => {
  return {
    token: state.access_token,
    location: state.userLocation,
    hasPermission: state.hasLocationPermisions
  };
};

export default connect(mapStateToProps)(BuscaDevs);
