import axios from 'axios';

export const getCharacters = (characterStart) => {
    return dispatch => {
        const limit = 10,
            apikey = 'c9da5268e65c63da333bdb1bbb0d6944',
            ts = 1,
            hash = '58de8a9c691c51f18dda2c49fe429f65';

        dispatch(getCharactersRequest());

        axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${characterStart}&limit=${limit}&apikey=${apikey}&ts=${ts}&hash=${hash}`)
            .then(function (response) {
                dispatch(getCharactersSuccess(response.data.data.results));
            })
            .catch(function (error) {
                dispatch(getCharactersError(error));
            });
    };
}

function getCharactersRequest() {
    return {
        type: 'GET_CHARACTERS_REQUEST',
        isFetching: true
    };
}

function getCharactersSuccess (characters) {
    return {
        type: 'GET_CHARACTERS_SUCCESS',
        isFetching: false,
        error: false,
        characters
    };
}

function getCharactersError(errorMessage) {
    return {
        type: 'GET_CHARACTERS_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

export const getComics = (characterId) => {
    return dispatch => {
        const limit = 10,
            apikey = 'c9da5268e65c63da333bdb1bbb0d6944',
            ts = 1,
            hash = '58de8a9c691c51f18dda2c49fe429f65';

        dispatch(getComicsRequest());

        axios.get(`https://gateway.marvel.com:443/v1/public/comics?characters=${characterId}&limit=${limit}&apikey=${apikey}&ts=${ts}&hash=${hash}`)
            .then(function (response) {
                dispatch(getComicsSuccess(response.data.data.results));
            })
            .catch(function (error) {
                dispatch(getComicsError(error));
            });
    };
}

function getComicsRequest() {
    return {
        type: 'GET_COMICS_REQUEST',
        isFetching: true
    };
}

function getComicsSuccess (comics) {
    return {
        type: 'GET_COMICS_SUCCESS',
        isFetching: false,
        error: false,
        comics
    };
}

function getComicsError(errorMessage) {
    return {
        type: 'GET_COMICS_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

export const addComicToMyList = (comicId) => {
    return {
        type: 'ADD_COMIC',
        comicId
    };
}

export const deleteComicFromMyList = (comicId) =>{
    return {
        type: 'DELETE_COMIC',
        comicId
    };
}