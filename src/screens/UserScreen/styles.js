import styled from 'styled-components';
import normalize from 'react-native-normalize';

const firstGradient = {
    width:'100%',
    backgroundColor:'skyblue',
    justifyContent:'center',
    alignItems:'flex-end',
    padding:5
}

const secondGradient = {
    flex:2,
    width:'100%',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'flex-end'
}

const thirdGradient = {
    flex:1,
    width:'100%',
    backgroundColor:'skyblue'
}

const Screen = styled.View`
    width: ${props => props.screenWidth};
    height: ${props => props.screenHeight}
`;

const Profile = styled.View`
    flex: 1;
`;

const UserName = styled.View`
    position: absolute;
    z-index: 3;
    top: 10%;
    left: 38%;
`;

const Name = styled.Text`
    color: ${props => props.theme};
    font-size: ${normalize(27)}px;
    font-weight: bold;
`;

const ImageBox = styled.View`
    position: absolute;
    width: ${normalize(103)}px;
    height: ${normalize(103)}px;
    border-radius:${normalize(53)}px;
    border-color: black;
    border-width: ${normalize(8)}px;
    background-color: white;
    left: 5%;
    top: 3%;
    z-index: 3;
`;

const UserImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: ${normalize(73)}px;
`;

const UserDataSection = styled.View`
    flex: 2;
`;

const GitDataSection = styled.View`
    flex: 3;
    margin-bottom: ${normalize(23)}px;
`;

const LocationLabel = styled.Text`
    color: white;
    font-weight: bold;
    font-size: ${normalize(18)}px;
    border-width: ${normalize(3)}px;
    border-color: white;
`;

const GetLocation = styled.Text`
    color: orange;
    background-color: white;
    font-weight: bold;
    font-size: ${normalize(18)}px;
    border-width: ${normalize(3)}px;
    border-color: orange;
    padding: ${normalize(8)}px;
`;

const TableContainer = styled.View`
    align-items: center;
    width: 100%;
    justify-content: space-around;
    height: 70%;
`;

const ScrollContainer = styled.View`
    flex: 6;
    width: 100%;
    background-color: #ccc;
`;

const ScrollBox = styled.View`
    width: ${normalize(293)}px;
    height: 75%;
    background-color: white;
    margin-top: ${normalize(23)}px;
    align-self: center;
    border-radius: ${normalize(23)}px;
`;

const OuterBorder = styled.View`
    background-color: ${props => props.theme};
    height: 100%;
    width: ${props => props.scrollWidth};
    border-radius: ${normalize(23)}px;
`;

const InnerBorder = styled.View`
    border-radius: ${normalize(43)}px;
    background-color: white;
    margin: ${normalize(8)}px;
    padding: ${normalize(13)}px;
    width: 96%;
    height: 96%;
`;

export {
    firstGradient,
    secondGradient,
    thirdGradient,
    Screen,
    Profile,
    UserName,
    Name,
    ImageBox,
    UserImage,
    UserDataSection,
    GitDataSection,
    LocationLabel,
    GetLocation,
    TableContainer,
    ScrollContainer,
    ScrollBox,
    OuterBorder,
    InnerBorder
}