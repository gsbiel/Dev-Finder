import React from 'react';
import {View,Image,Text} from 'react-native';
import GitHubApi from '../../../services/GitHubApi';


import styles from './styles';

class RepositoryItem extends React.PureComponent {

    state = {
        loaded:false,
        languages:[]
    }
    
    async componentDidMount() {
        this.setState({loaded:false});    
        const resp = GitHubApi.getLanguages(this.props.full_name)
        .then(async (resp) => {
             var array = Object.keys(resp.data);    
             this.setState({languages:array});
             if(this.state.languages.length === array.length) this.setState({loaded:true});
        });
    }

    render(){
        return(
            <View style={styles.outFlexContainer}>
                <Image style={styles.image}
                    source={{uri: 'https://icon-library.net/images/data-repository-icon/data-repository-icon-15.jpg'}}/>
                <View style={styles.inFlexContainer}>
                    <Text >{this.props.name}</Text>
                    <Text >{this.props.stars ? this.props.stars : '0'} stars</Text>
                    <Text>Linguagens: </Text>
                    <View style={{
                        paddingLeft:10
                    }}>
                        {this.state.loaded && this.state.languages.map(l =>                       
                            <Text key={l}>- {l}</Text>
                        )}   
                    </View>
                </View>
            </View>
        );
    } 
}

export default RepositoryItem;