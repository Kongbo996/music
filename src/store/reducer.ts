import { combineReducers } from 'redux'; // 捆绑多个reducer成为一个reducer
import { reducer as singersReducer } from '../pages/Singers/store/index'
export const reducer = combineReducers({
  singers: singersReducer
});
