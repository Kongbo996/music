import * as constants from './constants';

/** 定义计数count的action */
export interface ChangeRecommendCount {
  type: constants.RECOMMEND_COUNT,
  payload: number
}

/** 导出定义的类型 */
export type RecommendAction = ChangeRecommendCount;

/** 计数count的action */
export function changeRecommendCount(data: number): ChangeRecommendCount{
  return {
    type: constants.RECOMMEND_COUNT,
    payload: data
  }
}