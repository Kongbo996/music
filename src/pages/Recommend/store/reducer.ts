import * as constants from './constants';
import { RecommendAction } from './actionCreators';

/** 定义模块内的状态 */
export interface defaultState{
  count: number
}

/** 初始化状态 */
export const defaultState = {
  count: 0
}

/** reducer */
export default (state = defaultState, action: RecommendAction) => {
  switch (action.type) {
    case constants.RECOMMEND_COUNT: 
      return { ...state, count: action.payload }
    default: return state;
  }
}