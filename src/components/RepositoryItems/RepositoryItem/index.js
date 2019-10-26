import React from 'react';
import {View,Image,Text} from 'react-native';
import GitHubApi from '../../../services/GitHubApi';


import styles from './styles';

class RepositoryItem extends React.PureComponent {

    state = {
        loaded:true,
        languages:[]
    }

    render(){

        let languagesTxt = this.props.languages.map((language=>{
            return (
                <View key={language} style={{
                    paddingLeft:10
                }}>
                    <Text>- {language}</Text>
                </View>
            );
        }))

        return(
            <View style={styles.outFlexContainer}>
                <Image style={styles.image}
                    source={{uri: 'https://icon-library.net/images/data-repository-icon/data-repository-icon-15.jpg'}}/>
                <View style={styles.inFlexContainer}>
                    <Text >{this.props.name}</Text>
                    <Text >{this.props.stars ? this.props.stars : '0'} stars</Text>
                    <Text>Linguagens: </Text>
                    {languagesTxt.length>0 ? languagesTxt : <Text style={{paddingLeft:10}}>Nenhuma</Text>}   
                </View>
            </View>
        );
    } 
}

export default RepositoryItem;