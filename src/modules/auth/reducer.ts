import { Reducer } from "redux";
import { AuthState } from "./interface";

const initialState: AuthState = {
    isAuthenticated: false,
    actionType: '',
    isLoading: false,
    error: '',
}

export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',

    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_FAILED: 'LOGOUT_FAILED',

    RESET_ACTION_TYPE: 'RESET_ACTION_TYPE'
}

const reducer: Reducer<AuthState> = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return { ...state, actionType: actionTypes.LOGIN_REQUEST, isLoading: true, error: '' };
        case actionTypes.LOGIN_SUCCESS:
            return { ...state, actionType: actionTypes.LOGIN_SUCCESS, isAuthenticated: true, isLoading: false };
        case actionTypes.LOGIN_FAILED:
            return { ...state, actionType: actionTypes.LOGIN_FAILED, isLoading: false, error: action.error };

        case actionTypes.LOGOUT_SUCCESS:
            //deleteToken();
            return initialState;

        case actionTypes.RESET_ACTION_TYPE:
            return { ...state, actionType: '', error: ''};
    
        default:
            return state;
      }
}

export default reducer;