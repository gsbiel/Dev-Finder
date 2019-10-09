import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    zIndex: 99,
    backgroundColor: '#597fab',
    width: '100%',
    overflow: 'hidden',
    paddingBottom: 10,
    paddingTop: 28,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 45,
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },

  searchIcon: {
    position: 'absolute',
    left: 13,
    top: 12,
  },
  inputText: {
    marginTop: 13,
    marginLeft: 43,
    fontSize: 15,
    color: '#999',
  },
});

export default styles;
