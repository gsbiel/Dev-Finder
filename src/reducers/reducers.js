import {
  SET_TOKEN,
  SET_USER,
  SET_REPO,
  SET_LOCATION,
  ADD_FAVORITE,
  DEL_FAVORITE,
  SET_FAVORITES
} from '../actions/actions';

const initialState = {
  access_token: null,
  user: {
    name: '',
    login: '',
    followers: 0,
    site: '',
    email: '',
    image:
      '',
    repositories: 0,
  },
  repositories: [],
  favorites: [
    // 'danielbonifacio',
    // 'davidalves1',
    // 'edgarberlinck',
    // 'eliasfaical',
    // 'wilcorrea',
    // 'viniciusmmartins',
    // 'edgareler',
    // 'vizeke',
  ],
  userLocation: {
    city: 'Unknow',
    state: '??',
  },
};

const appReducer = (state = initialState, action) => {
  let newFavorites = null;
  switch (action.type) {
    case SET_TOKEN:
      return {...state, access_token: action.payload};
    case SET_USER:
      return {...state, user: action.payload};
    case SET_REPO:
      return {...state, repositories: action.payload};
    case SET_LOCATION:
      return {...state, userLocation: action.payload};
    case SET_FAVORITES:
      return {...state, favorites: action.payload}
    case ADD_FAVORITE:
      return {...state, favorites: [...state.favorites, action.payload]};
    case DEL_FAVORITE:
      newFavorites = state.favorites.filter(element => {
        return !(element === action.payload);
      });
      return {...state, favorites: newFavorites};
    default:
      return state;
  }
};

export default appReducer;
