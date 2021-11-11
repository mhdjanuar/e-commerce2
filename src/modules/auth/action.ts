import { Dispatch } from 'redux';
import { actionTypes } from "./reducer";
import { deleteToken } from '../../utils/token';

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

export const logout = () => (dispatch: Dispatch) => {
    deleteToken();
    dispatch({ type: actionTypes.LOGOUT_SUCCESS });
}

export const resetActionType = () => (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.RESET_ACTION_TYPE });
}