import { Dispatch } from 'redux';
import { actionTypes } from "./reducer";

const TOKEN_KEY = 'jwt';

export const login = () => (dispatch: Dispatch) => {
    try {
        dispatch({ type: actionTypes.LOGIN_REQUEST });
        localStorage.setItem(TOKEN_KEY, 'TestLogin');
        dispatch({ type: actionTypes.LOGIN_SUCCESS });
    } catch (error) {
        dispatch({ type: actionTypes.LOGIN_FAILED, error });
    }
}

export const resetActionType = () => (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.RESET_ACTION_TYPE });
}