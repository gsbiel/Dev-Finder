import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../styles/colors';
import styles from './styles';

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
                    onPress={()=>console.log('Vai pro app!')}>
                        <Text style={styles.textBtn}>App</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>console.log('Deslogar do app!')}>
                        <Text style={styles.textBtn}>Login out</Text>
                </TouchableOpacity>

            </LinearGradient>
            <Text>Esse é o drawer navigator</Text>
        </View>
    );
}

export default drawerNavigator;