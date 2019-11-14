import styled from 'styled-components';
import normalize from 'react-native-normalize';

const headerContainer = {
    height: '40%'
}

const bodyContainer = {
    height:'60%'
}

const Container = styled.View`
    flex: 1;
`;

const Header = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.Image`
    width: ${normalize(83)}px;
    height: ${normalize(83)}px;
`;

const AppName = styled.Text`
    font-size: ${normalize(33)}px;
    margin-left: ${normalize(13)}px;
    color: #57b4fd;
    font-style: italic;
    font-weight: bold;
`;

const AppBtn = styled.TouchableOpacity`
    height: 20%;
    background-color: white;
    margin-bottom: ${normalize(13)}px;
    justify-content: center;
    padding-left: ${normalize(13)}px;
`;

const TextBtn = styled.Text`
    font-weight: bold;
    font-size: ${normalize(25)}px;
`;

export{
    headerContainer,
    bodyContainer,
    Container,
    Header,
    Logo,
    AppName,
    AppBtn,
    TextBtn
}
