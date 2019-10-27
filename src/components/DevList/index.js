import React from 'react';
import {FlatList, Button} from 'react-native';

import colors from '../../styles/colors';
import {connect} from 'react-redux';
import DevFromList from '../DevFromList/index';
import EmptyList from '../EmptyList/index';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const DevList = props => {
  return (
    <FlatList
      ref={flatList => {
        if (flatList) {
          setInterval(() => {
            flatList.flashScrollIndicators();
          }, 2000);
        }
      }}
      data={props.data}
      renderItem={({item}) => {
        return <DevFromList user={item} />;
      }}
      keyExtractor={item => item.login}
      ListEmptyComponent={<EmptyList />}
      ListFooterComponent={ props.favoritesLength>props.listAmount ? 
        <Button
          title="Ver todos"
          color={colors.devListButtonColor}
          onPress={() => props.navigate('Favorites')}
        /> : ''
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    favoritesLength: state.favorites.length
  }
}

export default connect(mapStateToProps)(DevList);
