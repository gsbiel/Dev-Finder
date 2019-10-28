import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardA: {
    backgroundColor: '#030442',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 'auto',
    height: '22%',
    top: '3%',
    marginRight: 10,
    marginLeft: 10,
  },
  cardB: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    paddingTop: 43,
    zIndex: 1,
    borderRadius: 25,
    backgroundColor: 'white',
    width: 'auto',
    height: '75%',
    marginRight: 10,
    marginLeft: 10,
  },
  image: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 130,
    height: 130,
    borderRadius: 70,
    top: '8%',
    zIndex: 5,
    alignSelf: 'center',
    padding: 5,
  },
  devName: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default styles;
