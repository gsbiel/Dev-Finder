import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  containerInfo: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
  },
  devName: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 15,
  },
  devUsername: {},
  devFollowers: {},
});

export default styles;
