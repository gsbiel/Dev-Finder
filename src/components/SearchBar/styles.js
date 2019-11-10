import styled from 'styled-components';

const Container = styled.View`
    z-index: 99;
    background-color: #597fab;
    width: 100%;
    overflow: hidden;
    padding-bottom: 10px;
    padding-top: 20px;
`;

const SearchBox = styled.View`
    background-color: #fff;
    border-radius: 3px;
    height: 45px;
    margin-top: 3px;
    margin-left: 10px;
    margin-right: 10px;
`;

const TextInput = styled.TextInput`
    margin-top: 13px;
    margin-left: 43px;
    font-size: 15px;
    color: #999;
`;

const searchIcon = {
    position: 'absolute',
    left: 13,
    top: 12,
  };

export {Container,SearchBox, searchIcon, TextInput}
