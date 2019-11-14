import styled from 'styled-components';
import normalize from 'react-native-normalize';

const container = {
    flex: 1
}

const devInfoContainer ={ 
    flex: 1,
    margin: normalize(8),
    padding: normalize(3),
    borderRadius: normalize(43),
    backgroundColor: 'white',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor:"#ccc"
}

const devReposContainer = {
    borderRadius: normalize(43),
    margin: normalize(8),
    padding: normalize(13),
    width: '96%',
    height: '96%'
}

const BackCard = styled.View`
    background-color: #030442;
    border-top-left-radius: ${normalize(23)}px;
    border-top-right-radius: ${normalize(23)}px;
    width: auto;
    height: 22%;
    top: 3%;
    margin-right: ${normalize(13)}px;
    margin-left: ${normalize(13)}px;
`;

const FrontalCard = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    padding: ${normalize(13)}px;
    padding-top: ${normalize(46)}px;
    z-index: 1;
    border-radius: ${normalize(28)}px;
    background-color: white;
    width: auto;
    height: 75%;
    margin-right: ${normalize(13)}px;
    margin-left: ${normalize(13)}px;
`;

const ReturnBtn = styled.TouchableOpacity`
    border-width: ${normalize(3)}px;
    border-color: white;
    border-radius: ${normalize(8)}px;
    padding: ${normalize(5)}px;
`;

const ImageBox = styled.View`
    position: absolute;
    background-color: white;
    width: ${normalize(133)}px;
    height: ${normalize(133)}px;
    border-radius: ${normalize(73)}px;
    top: 8%;
    z-index: 5;
    align-self: center;
    padding: ${normalize(8)}px;
`;

const DevImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: ${normalize(73)}px;
`;

const DevName = styled.Text`
    align-self: center;
    font-weight: bold;
    font-size: ${normalize(25)}px;
`;

const OuterBord = styled.View`
    border-radius: ${normalize(23)}px;
    align-self: center;
    width: ${props => props.scrollViewWidth-20};
    height: 70%;
`;

const ScrollBoard = styled.View`
    background-color: ${props => props.theme};
    height: 100%;
    width: ${props => props.scrollViewWidth-20};
    border-radius: ${normalize(23)}px;
`;

export {
    container, 
    devInfoContainer,
    devReposContainer,
    BackCard, 
    FrontalCard, 
    ReturnBtn, 
    ImageBox, 
    DevImage, 
    DevName, 
    OuterBord, 
    ScrollBoard
}


