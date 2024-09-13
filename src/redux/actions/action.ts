import { Dispatch } from "redux";

export const FETCH_JOKE_REQUEST = 'FETCH_JOKE_REQUEST';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

interface FetchJokeRequestAction {
    type: typeof FETCH_JOKE_REQUEST
}

interface FetchJokeSuccessAction {
    type: typeof FETCH_JOKE_SUCCESS
    payload: string
}

interface FetchJokeFailureAction {
    type: typeof FETCH_JOKE_FAILURE
    payload: string
}

export type JokeActionTypes = FetchJokeRequestAction | FetchJokeSuccessAction | FetchJokeFailureAction;

export const fetchJoke = () => {
    return async (dispatch: Dispatch<JokeActionTypes>) => {
      dispatch({ type: FETCH_JOKE_REQUEST });
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        dispatch({ type: FETCH_JOKE_SUCCESS, payload: data.value });
      } catch (error: any) {
        dispatch({ type: FETCH_JOKE_FAILURE, payload: error.message });
      }
    };
};