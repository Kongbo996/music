import * as constants from './constants';


export interface ChangeSingersList {
  type: constants.SINGERS_LIST;
  payload: any 
}

export type SingersAction = ChangeSingersList;

export function changeSingersList(data: any): ChangeSingersList {
  console.log(data)
  return {
    type: constants.SINGERS_LIST,
    payload: data
  };
}
