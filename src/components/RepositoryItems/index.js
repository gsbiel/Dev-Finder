import React,{Component} from 'react';
import {View,FlatList} from 'react-native';

import GitHubApi from '../../services/GitHubApi';
import RepositoryItem from './RepositoryItem/index';
import EmptyList from '../EmptyList/index';
import Loading from '../Loading';

class RepositoryItems extends Component {

    state={
        isLoading:true,
        repositories: null
    }

    renderSeparator = () => {
        return(
            <View style={{
                width:'96%',
                height:20
            }} />
        );
    }

    getLanguages = async (fullName) => {
        const resp = await GitHubApi.getLanguages(fullName);
        return resp.data;
    }

    async componentDidMount(){
        const repositories = this.props.data.map((async repoData=>{
            const name = repoData.name;
            const stars = repoData.stars;
            const id = repoData.id;
            const languagesObj = await this.getLanguages(repoData.full_name);
            const languages = Object.keys(languagesObj);
            return{
                name,
                stars,
                languages,
                id
            }
        }));

        (async ()=>{
            const repositoryData = await Promise.all(repositories);
            this.setState({repositories: repositoryData, isLoading:false});
        })();
    }

    render(){

        let contentScreen = <Loading />
        if(!this.state.isLoading){
            contentScreen = (
                <FlatList
                ref={flatList=>{
                    if(flatList){
                        setInterval(()=>{
                            flatList.flashScrollIndicators()
                        },2000);
                    }
                }}
                data={this.state.repositories}
                renderItem={({item})=>{
                    return(
                        <RepositoryItem name={item.name} stars={item.stars} languages={item.languages}/>
                    );
                }}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={this.renderSeparator}
                ListEmptyComponent ={<EmptyList/>}/>
            )
        }
        return contentScreen;
    }
}

export default RepositoryItems;