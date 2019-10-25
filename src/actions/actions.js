export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';
export const SET_REPO = 'SET_REPO';
export const SET_LOCATION = 'SET_LOCATION';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DEL_FAVORITE = 'DEL_FAVORITE';

export const setToken = (token) => {
    return({
        type: SET_TOKEN,
        payload:token
    });
};

export const setUser = (user) => {
    return({
        type: SET_USER,
        payload:user
    });
};

export const setRepositories = (repositories) =>{
    return({
        type: SET_REPO,
        payload: repositories
    });
}

export const setLocation = (location) => {
    return({
        type: SET_LOCATION,
        payload: location
    });
};

export const addFavorite = (url) => {
    return({
        type: ADD_FAVORITE,
        payload: url
    });
};

export const delFavorite = (url) => {
    return({
        type: DEL_FAVORITE,
        payload: url
    });
};