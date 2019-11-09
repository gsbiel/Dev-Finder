import React from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../styles/colors';
import styles from './styles';
import GitHubApi from '../../services/GitHubApi';

import {setToken} from '../../actions/actions';
import {connect} from 'react-redux'

const drawerNavigator = (props) => {

    return(
        <View style={styles.drawerContainer}>
            <LinearGradient 
                colors={colors.linearGradientColors}
                style={styles.headerContainer}
            >
                <View style={styles.appHeader}>
                    <Image 
                            style={styles.appLogo}
                            source={require('../../assets/images/alvo.png')}/>
                    <Text style={styles.headerText}>DevFinder</Text>
                </View>       
            </LinearGradient>
            <LinearGradient 
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={colors.secondaryGradient}
                style={styles.bodyContainer}
            >
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=> props.navigation.closeDrawer()}>
                        <Text style={styles.textBtn}>App</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={async ()=>{
                        console.log('Deslogar do app!');
                        ToastAndroid.show(
                            'Usuário desconectado.',
                            ToastAndroid.LONG,
                        );
                        props.dispatch(setToken(''));
                        await GitHubApi.deleteToken();
                        props.navigation.navigate('AboutApp')}}>
                        <Text style={styles.textBtn}>Login out</Text>
                </TouchableOpacity>

            </LinearGradient>
        </View>
    );
}

export default connect()(drawerNavigator);