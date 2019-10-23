import {SET_TOKEN, SET_USER, SET_REPO, SET_LOCATION} from '../actions/actions';

const initialState = {
  access_token: null,
  user: {
    name: 'Beltrano de Tal Almeida',
    username: 'Beltral',
    followers: 500,
    site: 'www.beltrano.com.br',
    email: 'beltrano-tal@gmail.com',
    image:
      'https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm',
    repositories: 0,
  },
  repositories: [
    {
      id: '1',
      name: 'Django Project',
      stars: 120,
      language: 'python',
    },
    {
      id: '2',
      name: 'C++ Project',
      stars: 180,
      language: 'C++',
    },
    {
      id: '3',
      name: 'React Native Project',
      stars: 500,
      language: 'javascript',
    },
    {
      id: '4',
      name: 'Android Project',
      stars: 30,
      language: 'java',
    },
    {
      id: '5',
      name: 'Ruby Project',
      stars: 20,
      language: 'ruby',
    },
  ],
  favorites: [
    {
      name: 'Gaspar',
      username: 'gsbiel',
      followers: 250,
    },
    {
      name: 'Bia',
      username: 'bihh',
      followers: 100,
    },
    {
      name: 'Flavio',
      username: 'flaflu',
      followers: 200,
    },
    {
      name: 'Edeno',
      username: 'edenoscherer',
      followers: 50,
    },
    {
      name: 'Henrique',
      username: 'henrr',
      followers: 20,
    },
    {
      name: 'Eduardo',
      username: 'Edudu',
      followers: 560,
    },
  ],
  userLocation: {
    city: 'Vitórinha',
    state: 'ES',
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {...state, access_token: action.payload};
    case SET_USER:
      return {...state, user: action.payload};
    case SET_REPO:
      return {...state, repositories: action.payload};
    case SET_LOCATION:
      return {...state, userLocation: action.payload};
    default:
      return state;
  }
};

export default appReducer;
