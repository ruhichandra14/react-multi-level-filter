import { combineReducers } from 'redux';
import IsUserLoggedInReducer from './login_reducer';
import ChartClassesReducer from './chart_type_reducer';

const rootReducer = combineReducers({
    IsUserLoggedIn : IsUserLoggedInReducer,
    ChartClasses : ChartClassesReducer
})

export default rootReducer;