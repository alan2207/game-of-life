import { combineReducers } from 'redux';
import gridReducer from './grid_reducer';

const rootReducer = combineReducers({
  grid: gridReducer
});

export default rootReducer;
