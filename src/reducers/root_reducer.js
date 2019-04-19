import { combineReducers } from 'redux';
import IsUserLoggedInReducer from './login_reducer';
import ChartClassesReducer from './chart_type_reducer';
import NavigationMenuReducer from './nav_menu_reducer';
import SearchReducer from './search_reducer';
import TabTypeReducer from './tab_type_reducer';

const rootReducer = combineReducers({
    IsUserLoggedIn : IsUserLoggedInReducer,
    ChartClasses : ChartClassesReducer,
    IsNavigationMenuClicked : NavigationMenuReducer,
    SearchState : SearchReducer,
    TabType : TabTypeReducer
})

export default rootReducer;