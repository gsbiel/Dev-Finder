import {
  SET_TOKEN,
  SET_USER,
  SET_REPO,
  SET_LOCATION,
  ADD_FAVORITE,
  DEL_FAVORITE,
} from '../actions/actions';

const initialState = {
  access_token: null,
  user: {
    name: 'Beltrano de Tal Almeida',
    login: 'Beltral',
    followers: 500,
    site: 'www.beltrano.com.br',
    email: 'beltrano-tal@gmail.com',
    image:
      'https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm',
    repositories: 0,
  },
  repositories: [],
  favorites: [
    'danielbonifacio',
    'davidalves1',
    'edgarberlinck',
    'eliasfaical',
    'wilcorrea',
    'viniciusmmartins',
    'edgareler',
    'vizeke',
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
