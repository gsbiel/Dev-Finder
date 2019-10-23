import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#7800ff" />
    </View>
  );
};

export default Loading;
