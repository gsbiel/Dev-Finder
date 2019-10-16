import {createStore} from 'redux';
import appReducer from './reducers/reducers'; 

const store = createStore(appReducer);

export default store;