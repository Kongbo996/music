import React from 'react';
import * as actions from './store/actionCreators';
import { defaultState } from './store/reducer'
import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { catlist } from '../../request'
interface data {
  name: string;
}
const list = [
  { name: 'abc'}
]
export interface Props {
  singerList: data[],
  changeSingersList:(data: data[]) => void
}
class Singers extends React.Component<Props> {
  handleClick = (val: data[]) => {
    const { singerList, changeSingersList } = this.props;
    const newList = [...singerList, ...val];
    changeSingersList(newList);
  }

  render() {
    catlist.then(res=>{
      console.log(res)
    });
    const { singerList } = this.props;
    return <div onClick={() => { this.handleClick(list);} }>Singers</div>;
  }
}

export function mapStateToProps(state: any) {
  console.log('mapStateToProps', state.singers.singerList)
  return {
    ...state.singers
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SingersAction>) {
  return {
    changeSingersList: (data: data[]) => dispatch(actions.changeSingersList(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Singers);
