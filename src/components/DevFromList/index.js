import React, {Component} from 'react';

import {View, Image, Text} from 'react-native';

import styles from './styles';

export default class DevFromList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          // source={{
          //   uri:
          //     'https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_man_people_person_profile_user_icon_123375.png',
          // }}
          source={require('../../assets/images/user.png')}
          style={styles.image}
        />
        <View style={styles.containerInfo}>
          <Text style={styles.devName}>Edeno Luiz Scherer</Text>
          <Text style={styles.devUsername}>edenoscherer</Text>
          <Text style={styles.devFollowers}>150 seguidores</Text>
        </View>
      </View>
    );
  }
}
