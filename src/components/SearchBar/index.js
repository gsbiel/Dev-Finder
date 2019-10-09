import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Icon
            name="search"
            size={22}
            style={styles.searchIcon}
            color="#bbb"
          />

          <TextInput
            style={styles.inputText}
            placeholder="Buscar Dev"
            placeholderTextColor="#999"
            underlineColorAndroid="#fff"
            autoCorrect={false}
          />
        </View>
      </View>
    );
  }
}
