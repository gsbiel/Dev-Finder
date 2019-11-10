import styled from 'styled-components';

const container = {
    flex: 1
}

const devInfoContainer ={ 
    flex: 1,
    margin: 5,
    padding: 1,
    borderRadius: 40,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor:"#ccc"
}

const devReposContainer = {
    borderRadius: 40,
    margin: 5,
    padding: 10,
    width: '96%',
    height: '96%'
}

const BackCard = styled.View`
    background-color: #030442;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: auto;
    height: 22%;
    top: 3%;
    margin-right: 10px;
    margin-left: 10px;
`;

const FrontalCard = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    padding-top: 43px;
    z-index: 1;
    border-radius: 25px;
    background-color: white;
    width: auto;
    height: 75%;
    margin-right: 10px;
    margin-left: 10px;
`;

const ReturnBtn = styled.TouchableOpacity`
    border-width: 1px;
    border-color: white;
    border-radius: 5px;
    padding: 2px;
`;

const ImageBox = styled.View`
    position: absolute;
    background-color: white;
    width: 130px;
    height: 130px;
    border-radius: 70px;
    top: 8%;
    z-index: 5;
    align-self: center;
    padding: 5px;
`;

const DevImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 70px;
`;

const DevName = styled.Text`
    align-self: center;
    font-weight: bold;
    font-size: 22px;
`;

const OuterBord = styled.View`
    border-radius: 20px;
    align-self: center;
    width: ${props => props.scrollViewWidth-20};
    height: 70%;
`;

const ScrollBoard = styled.View`
    background-color: ${props => props.theme};
    height: 100%;
    width: ${props => props.scrollViewWidth-20};
    border-radius: 20px;
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


