import { FETCH_JOKE_FAILURE, FETCH_JOKE_REQUEST, FETCH_JOKE_SUCCESS, JokeActionTypes } from "../actions/action";

interface JokeState {
    joke: string;
    loading: boolean;
    error: string | null; // Changed to null for better error handling
}

const initialState: JokeState = {
    joke: '',
    loading: false,
    error: null // Changed to null
};

const jokeReducer = (state: JokeState = initialState, action: JokeActionTypes): JokeState => {
    switch (action.type) {
        case FETCH_JOKE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_JOKE_SUCCESS:
            return {
                joke: action.payload,
                loading: false,
                error: ''
            };
        case FETCH_JOKE_FAILURE:
            return {
                joke: '',
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default jokeReducer;