import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from './../../styles/colors';
import {Container} from './styles';

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={colors.primaryColor} />
    </Container>
  );
};

export default Loading;
