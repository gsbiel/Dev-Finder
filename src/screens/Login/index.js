import React from 'react';
import { authorize } from 'react-native-app-auth';
import {
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';

import styles from './styles';

export default class Login extends React.PureComponent {

    state = {
        email: '',
        password: '',
        disabled: false
      }

    config = {
        serviceConfiguration: {
            authorizationEndpoint: 'https://github.com/login/oauth/authorize',
            tokenEndpoint: 'https://github.com/login/oauth/access_token'
        },
        clientId:'4d5e5470c4da4dd71d4f',
        clientSecret:'b03e3fae2d8c669f7d4de9109edc9fabec05371a',
        redirectUrl: 'io.devfinder://callback',
        scopes: ["public_repo","read:user"]
    }
      
      // handlerSubmit = (x) => {
      //   if(x == true) {
      //     this.abilited(true)
      //     const username = this.state.email;
      //     const client_id = "c09b9c1a62acf64f338a";
      //     const client_secret = "6cbea067837ba78773e3886eed918b493e0c8db9";
      //     axios.get(`https://github.com/login/oauth/authorize`, {
    
      //       client_id: client_id,
      //       redirect_uri: 'http://localhost:19002',
      //       login: this.state.email,
      //       allow_signup: true
    
      //     }).then(async (response) => {
                  
      //       this.abilited(false)
      //       // const user = JSON.stringify(response);
      //       // alert(user)
      //       //   try {
      //       //     await AsyncStorage.setItem('user', user);
                
      //       //     this.props.navigation.navigate('Acceleration')                   
      //       //   } catch (error) {
      //       //     Alert.alert(error+" Erro ao salvar dados!")
      //       //   }              
                            
      //     }).catch(function(error) {
      //         alert("Senha ou email invalido!")
      //         this.abilited(false)
      //     })          
        
      //   }  
      // };  
     
    
      abilited = (x) => {
        this.setState({disabled:x})
      }
    
      onLoginHandler = async () => {
        this.abilited(true);
        this.__authorize();
        this.props.navigation.navigate('UserScreen');
      }

      __authorize = async () => {
        try {
            // Make request to Google to get token
            const authState = await authorize(this.config)
            this.setToken(authState.accessToken);
        } catch (error) {
            console.log('error', error);
            this.abilited(true);
        }
      }

      setToken = async (token) =>{
        await AsyncStorage.setItem('access_token', token);
        // props.dispatch({
        //     type:'SET_TOKEN',
        //     payload:token
        // });
      }

      async componentDidMount() {
  
        const token = await AsyncStorage.getItem('access_token');
        if(token !== '' && token !== null) {
          this.props.navigation.navigate('UserScreen');
        }
      }  

  render() {

    const {email,password,disabled} = this.state;
    const {navigate} = this.props.navigation;
       
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/images/alvo.png")}
          />
          
          <Text style={styles.headerText}>Dev Finder</Text>

        </View>           
                
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
            onPress={() => navigate("DevDetails")}
             >
              <View style={styles.botoes}>
                <Text style={styles.textButton}>Login</Text>
              </View>              
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigate("DevDetails")}
             >
              <View style={styles.botoes}>
                <Text style={styles.textButton}>Registrar</Text>
              </View>              
            </TouchableOpacity>
        </View>

        <View>    
            <View style={{flexDirection:'row', alignSelf:'center', marginTop:20, width:200, borderBottomWidth:1,borderBottomColor:'white'}}>
            <Image
              style={styles.headerMail}
              source={require("../../assets/images/ic_mail_24px.png")}
            />
            <TextInput
              style={styles.input}
              autoCompleteType="email"
              value={email}
              keyboardType="email-address"
              placeholder="nome@gmail.com"
              onChangeText={text => this.setState({email:text})}
            />            
            </View>

            <View style={{flexDirection:'row', alignSelf:'center', marginTop:20, width:200, borderBottomWidth:1,borderBottomColor:'white'}}>
            <Image
              style={styles.headerPass}
              source={require("../../assets/images/padlock-unlocked.png")}
            />
            <TextInput
              style={styles.input}
              autoCompleteType="password"
              secureTextEntry={true}
              value={password}
              placeholder="Password"
              onChangeText={text => this.setState({password:text,disabled:false})}
            />            
            </View>
                         
            <TouchableOpacity 
            onPress={() => navigate("DevDetails")}
             >
              <View style={styles.touchable}>
                <Text style={styles.textButton}>Login</Text>
              </View>              
            </TouchableOpacity>  
        </View>                

            <TouchableOpacity 
            onPress={() => {
              if(!disabled) { this.onLoginHandler()}
            }}
             >
              <View style={styles.git}>

                <Image
                    style={styles.headerPass}
                    source={require("../../assets/images/GitHub-Mark-Light-32px.png")}
                />    
                <Text style={[styles.textButton,{marginLeft:15}]}>GitHub</Text>
              </View>              
            </TouchableOpacity>                  
                
      </View>
    );
  }
}

