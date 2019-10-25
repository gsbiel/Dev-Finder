import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import colors from './../../styles/colors';

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
      <ActivityIndicator size="large" color={colors.primaryColor} />
    </View>
  );
};

export default Loading;
