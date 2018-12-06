import { combineReducers } from 'redux';
import navBarReducer from './component/navBar/navBarReducer';
import servicesReducer from './container/reducer/servicesReducer';
import workReducer from './container/reducer/workReducer';

export default combineReducers({
    navBarReducer,
    servicesReducer,
    workReducer
})
