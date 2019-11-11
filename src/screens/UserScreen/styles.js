import styled from 'styled-components';

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
    font-size: 24px;
    font-weight: bold;
`;

const ImageBox = styled.View`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border-color: black;
    border-width: 5px;
    background-color: white;
    left: 5%;
    top: 3%;
    z-index: 3;
`;

const UserImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 70px;
`;

const UserDataSection = styled.View`
    flex: 2;
`;

const GitDataSection = styled.View`
    flex: 3;
    margin-bottom: 20px;
`;

const LocationLabel = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-width: 1px;
    border-color: white;
`;

const GetLocation = styled.Text`
    color: orange;
    background-color: white;
    font-weight: bold;
    font-size: 18px;
    border-width: 1px;
    border-color: orange;
    padding: 5px;
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
    width: 280px;
    height: 75%;
    background-color: white;
    margin-top: 20px;
    align-self: center;
    border-radius: 20px;
`;

const OuterBorder = styled.View`
    background-color: ${props => props.theme};
    height: 100%;
    width: ${props => props.scrollWidth};
    border-radius: 20px;
`;

const InnerBorder = styled.View`
    border-radius: 40px;
    background-color: white;
    margin: 5px;
    padding: 10px;
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