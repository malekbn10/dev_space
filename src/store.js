import { createStore } from 'redux';
import authReducer from './redux/inventory/authSlice';
import { combineReducers } from 'redux'; 
import {userUpdateReducer} from './redux/inventory/userReducers'; 

const rootReducer = combineReducers({
  auth: authReducer,
  userUpdate : userUpdateReducer,
});

const store = createStore(rootReducer);

export default store;