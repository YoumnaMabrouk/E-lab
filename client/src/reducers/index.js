import{combineReducers} from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import velocityReducer from './velocityReducer';

export default combineReducers({
    error:errorReducer,
    auth:authReducer,
    velocity:velocityReducer
});