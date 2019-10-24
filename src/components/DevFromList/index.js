import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

import styles from './styles';

class DevFromList extends Component {
  render() {
    const user = this.props.user;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate('DevDetails', {
            user: user,
          })
        }>
        <Image source={{uri: user.avatar_url}} style={styles.image} />
        <View style={styles.containerInfo}>
          <Text style={styles.devName}>{user.name}</Text>
          <Text style={styles.devUsername}>{user.login}</Text>
          <Text style={styles.devFollowers}>{user.followers} seguidores</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(DevFromList);
