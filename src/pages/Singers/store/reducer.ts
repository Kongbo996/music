import * as actionTypes from './constants';
import { SingersAction } from './actionCreators';

interface data {
  name: string;
}
export interface defaultState {
  singerList: Array<data>;
}
export const defaultState = {
  singerList: []
}

export default (state = defaultState, action: SingersAction) => {
  switch (action.type) {
    case actionTypes.SINGERS_LIST:
      return { ...state, singerList: action.payload };
    default: return state;
  }
};