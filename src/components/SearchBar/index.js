import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, SearchBox,searchIcon,TextInput} from './styles';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <SearchBox>
          <Icon
            name="search"
            size={22}
            style={searchIcon}
            color="#bbb"
          />

          <TextInput
            placeholder="Buscar Dev"
            placeholderTextColor="#999"
            underlineColorAndroid="#fff"
            autoCorrect={false}
          />
        </SearchBox>
      </Container>
    );
  }
}

export default SearchBar;
