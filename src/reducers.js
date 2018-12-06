import { combineReducers } from 'redux';
import navBarReducer from './component/navBar/navBarReducer';
import servicesReducer from './container/reducer/servicesReducer';
import workReducer from './container/reducer/workReducer';
import productReducer from './container/reducer/productReducer';
import cultureReducer from './container/reducer/cultureReducer';


export default combineReducers({
    navBarReducer,
    servicesReducer,
    workReducer,
    productReducer,
    cultureReducer
})
