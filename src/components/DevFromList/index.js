import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

import styles from './styles';

class DevFromList extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate('DevDetails', {
            username: this.props.username,
          })
        }>
        <Image
          source={{uri: this.props.avatar_url}}
          style={styles.image}
        />
        <View style={styles.containerInfo}>
          <Text style={styles.devName}>{this.props.name}</Text>
          <Text style={styles.devUsername}>{this.props.username}</Text>
          <Text style={styles.devFollowers}>
            {this.props.followers} seguidores
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(DevFromList);
