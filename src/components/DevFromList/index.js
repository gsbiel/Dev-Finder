import React, {Component} from 'react';

import {View, Image, Text} from 'react-native';

import styles from './styles';

export default class DevFromList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/user.png')}
          style={styles.image}
        />
        <View style={styles.containerInfo}>
          <Text style={styles.devName}>{this.props.name}</Text>
          <Text style={styles.devUsername}>{this.props.username}</Text>
          <Text style={styles.devFollowers}>{this.props.followers} seguidores</Text>
        </View>
      </View>
    );
  }
}
