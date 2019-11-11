import React from 'react';
import {Text} from 'react-native';

import colors from '../../../styles/colors';
import {Container, 
        RepositoryBox, 
        LanguageBox, 
        RepoImage} 
from './styles';

class RepositoryItem extends React.PureComponent {

    state = {
        loaded:true,
        languages:[]
    }

    render(){

        let languagesTxt = this.props.languages.map((language=>{
            return (
                <LanguageBox key={language}>
                    <Text>- {language}</Text>
                </LanguageBox>
            );
        }))

        return(
            <Container theme={colors.themeColor}>
                <RepoImage source={{uri: 'https://icon-library.net/images/data-repository-icon/data-repository-icon-15.jpg'}}/>
                <RepositoryBox theme={colors.themeColor}>
                    <Text >{this.props.name}</Text>
                    <Text >{this.props.stars ? this.props.stars : '0'} stars</Text>
                    <Text>Linguagens: </Text>
                    {languagesTxt.length>0 ? languagesTxt : <Text style={{paddingLeft:10}}>Nenhuma</Text>}   
                </RepositoryBox>
            </Container>
        );
    } 
}

export default RepositoryItem;