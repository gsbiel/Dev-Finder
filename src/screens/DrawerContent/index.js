import React from 'react';
import {ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';
import {
    headerContainer,
    bodyContainer,
    Container,
    Header,
    Logo,
    AppName,
    AppBtn,
    TextBtn  
} from './styles';
import GitHubApi from '../../services/GitHubApi';
import {setToken} from '../../actions/actions';
import {connect} from 'react-redux'

const drawerNavigator = (props) => {

    return(
        <Container>
            <LinearGradient 
                colors={colors.linearGradientColors}
                style={headerContainer}
            >
                <Header>
                    <Logo source={require('../../assets/images/alvo.png')}/>
                    <AppName>DevFinder</AppName>
                </Header>       
            </LinearGradient>
            <LinearGradient 
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={colors.secondaryGradient}
                style={bodyContainer}
            >
                <AppBtn onPress={()=> props.navigation.closeDrawer()}>
                    <TextBtn>App</TextBtn>
                </AppBtn>

                <AppBtn
                    onPress={async ()=>{
                        console.log('Deslogar do app!');
                        ToastAndroid.show(
                            'Usuário desconectado.',
                            ToastAndroid.LONG,
                        );
                        props.dispatch(setToken(''));
                        await GitHubApi.deleteToken();
                        props.navigation.navigate('AboutApp')}}
                >
                        <TextBtn>Login out</TextBtn>
                </AppBtn>
            </LinearGradient>
        </Container>
    );
}

export default connect()(drawerNavigator);