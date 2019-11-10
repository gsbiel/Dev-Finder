import styled from 'styled-components';

const AppHeader = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-top: 100;
`;

const AppLogo = styled.Image`
    height: 100px;
    width: 100px;
`;

const HeaderText = styled.Text`
    font-size: 30px;
    margin-left: 10px;
    color: #57b4fd;
    font-style: italic;
    font-weight: bold;
`;

const Text = styled.Text`
    margin-top: 50px;
    margin-left: 20%;
    color: white;
    font-weight: bold;
`;

const StartBtn = styled.TouchableOpacity`
    align-self: center;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 200px;
    border-radius: 5px;
    border-color: #fff;
    border-width: 1px;
`;

const TextBtn = styled.Text`
    color: white;
    font-size: 20px;
    font-style: italic;
`;

const container = {
      flex: 1,
      backgroundColor: '#ad7',
}

export {AppHeader, AppLogo, HeaderText, Text, StartBtn, TextBtn, container}
