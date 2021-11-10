import {combineReducers} from 'redux';
import home from '../modules/home/reducer';
import auth from '../modules/auth/reducer';

const rootReducer = combineReducers({
    home,
    auth
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;