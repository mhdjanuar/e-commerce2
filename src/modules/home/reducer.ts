import { Reducer } from 'redux';
import { HomeState } from './interface';

const initialState: HomeState = {
    actionType: '',
    isLoading: false,
    error: '',
};

const reducer: Reducer<HomeState> = (state = initialState, action) => {
    switch (action.type) {
        case 'Home_Test_Redux':
          return { ...state, isLoading: true, error: 'ini ada error', };
    
        default:
          return state;
      }
}

export default reducer;

  