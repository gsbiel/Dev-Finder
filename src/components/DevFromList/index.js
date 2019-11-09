import React, {Component} from 'react';
import {withNavigation} from 'react-navigation';

import {
        DevContainer,
        DevImage,
        InfoBox,
        InfoItem
} from './styles';

class DevFromList extends Component {
  render() {
    const user = this.props.user;
    return (
      <DevContainer
        onPress={() =>
          this.props.navigation.navigate('DevDetails', {
            user: user,
          })
        }>
        <DevImage source={{uri: user.avatar_url}}/>
        <InfoBox>
          <InfoItem>{user.name}</InfoItem>
          <InfoItem>{user.login}</InfoItem>
          <InfoItem>{user.followers} seguidores</InfoItem>
        </InfoBox>
      </DevContainer>
    );
  }
}

export default withNavigation(DevFromList);
