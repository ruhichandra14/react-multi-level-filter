import { combineReducers } from 'redux';
import IsUserLoggedInReducer from './login_reducer';

const rootReducer = combineReducers({
    IsUserLoggedIn : IsUserLoggedInReducer
})

export default rootReducer;