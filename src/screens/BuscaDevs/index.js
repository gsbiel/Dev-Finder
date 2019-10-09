import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import DevFromList from '../../components/DevFromList';

export default class BuscaDevs extends Component {
  /**
   * @type {{isLoading: boolena, devs:[{key: number}]}} state
   */
  state = {
    devs: [],
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      for (let index = 0; index < 10; index++) {
        this.addDev();
      }
      this.setState({isLoading: false});
    }, 600);
  }

  addDev = () => {
    const devs = this.state.devs;
    devs.push({key: devs.length + 1});
    this.setState({devs: devs});
  };

  loadMoreData = () => {
    this.setState({isLoading: true});

    setTimeout(() => {
      for (let index = 0; index < 10; index++) {
        this.addDev();
      }
      this.setState({isLoading: false});
    }, 1000);
  };

  listFooter = () => {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#a99" />;
    }
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.loadMoreData();
          }}>
          <Text style={styles.btnText}>Carregar Mais</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const devs = this.state.devs;

    return (
      <View style={styles.container}>
        <SearchBar />
        <View style={styles.listContainer}>
          <FlatList
            data={devs}
            keyExtractor={(item, index) => `${item.key}-${index}`}
            renderItem={({dev, index}) => <DevFromList dev={dev} />}
            onEndReached={this.loadMoreData}
            ListFooterComponent={this.listFooter.bind(this)}
          />
        </View>
        <Button
          title="Voltar para a HOME"
          onPress={() => {
            this.props.navigation.navigate('Main');
          }}
        />
      </View>
    );
  }
}

BuscaDevs.navigationOptions = {
  title: 'BuscaDevs',
};
