import React, {Component} from 'react';
import {View,Text} from 'react-native';
import styles from './styles';

class UserScreen extends Component {
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text>
                    Tela do usuário
                </Text>
            </View>
        )
    }
}

export default UserScreen;

