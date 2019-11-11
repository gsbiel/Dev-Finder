import styled from 'styled-components';

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
    width: 80px;
    height: 80px;
`;

const AppName = styled.Text`
    font-size: 30px;
    margin-left: 10px;
    color: #57b4fd;
    font-style: italic;
    font-weight: bold;
`;

const AppBtn = styled.TouchableOpacity`
    height: 20%;
    background-color: white;
    margin-bottom: 10px;
    justify-content: center;
    padding-left: 10px;
`;

const TextBtn = styled.Text`
    font-weight: bold;
    font-size: 22px;
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
