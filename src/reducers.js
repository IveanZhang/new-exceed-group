import { combineReducers } from 'redux';
import navBarReducer from './component/navBar/navBarReducer';
import servicesReducer from './container/reducer/servicesReducer';

export default combineReducers({
    navBarReducer,
    servicesReducer
})
