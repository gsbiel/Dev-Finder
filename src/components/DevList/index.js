import React from 'react';
import {FlatList, Button} from 'react-native';

import DevFromList from '../DevFromList/index';
import EmptyList from '../EmptyList/index';

const devList = props => {
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
      keyExtractor={item => item.username}
      ListEmptyComponent={<EmptyList />}
      ListFooterComponent={<Button title="Ver todos" color="skyblue" />}
    />
  );
};

export default devList;
