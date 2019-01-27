import authReducer from './authReducer';
import registerReducer from './registerReducer';
//import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  //firebase: firebaseReducer
});

export default rootReducer;