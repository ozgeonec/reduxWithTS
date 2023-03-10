import axios from 'axios';
import {ActionType} from "../action-types";
import {Dispatch} from 'redux';
import {Action} from "../actions";

export const searchRepos = (term: string) => {

    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES,
            payload: 'loading...'
        });
        try {

            const {data} = await axios.get('https://registry.npm.js.org/-/v1/search', {
                params: {
                    text: term
                }
            });

            const names = data.object.map((result: any) => {
                return result.package.name;
            });

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            });

        } catch (err) {
            if (err instanceof Error) {
                dispatch({
                    type: ActionType.SEARCH_REPOSITORIES_ERROR,
                    payload: err.message
                });
            }

        }
    };
};