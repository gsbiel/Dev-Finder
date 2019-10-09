import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import styles from './styles';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Teste</Text>
        <Button
          title="Listagem Busca Devs"
          onPress={() => {
            this.props.navigation.navigate('BuscaDevs');
          }}
        />
      </View>
    );
  }
}

Main.navigationOptions = {
  title: 'Main',
};
